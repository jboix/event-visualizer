package ch.srgssr.pillarbox.qos.event

import ch.srgssr.pillarbox.qos.TerminationService
import ch.srgssr.pillarbox.qos.event.config.SseClientConfiguration
import ch.srgssr.pillarbox.qos.event.model.EventRequest
import ch.srgssr.pillarbox.qos.log.logger
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient

/**
 * Service responsible for managing a Server-Sent Events (SSE) client. The client connects to an SSE endpoint,
 * handles incoming events, and manages retry behavior in case of connection failures.
 *
 * @property eventService The service used to handle incoming events.
 * @property configuration The SSE client configuration containing the URI and retry settings.
 * @property terminationService The service responsible for terminating the application in case of critical failures.
 */
@Service
class SseClient(
  private val eventService: EventService,
  private val configuration: SseClientConfiguration,
  private val terminationService: TerminationService
) {

  companion object {
    /**
     * Logger instance for logging within this service.
     */
    val logger = logger()
  }

  /**
   * Starts the SSE client, connecting to the configured SSE endpoint. It handles incoming events by
   * delegating to the appropriate event handling methods and manages retries in case of connection failures.
   */
  fun start() {
    WebClient.create(configuration.uri)
      .get()
      .retrieve()
      .bodyToFlux(EventRequest::class.java)
      .retryWhen(configuration.retry.create().doBeforeRetry {
        logger.warn("Retrying SSE connection...")
      })
      .subscribe(
        { CoroutineScope(Dispatchers.IO).launch { handleEvent(it) } },
        { CoroutineScope(Dispatchers.IO).launch { terminateApplication(it) } }
      )
  }

  private fun terminateApplication(error: Throwable) {
    logger.error("Failed to connect after retries, exiting application.", error)
    terminationService.terminateApplication()
  }

  private suspend fun handleEvent(eventRequest: EventRequest) {
    when (eventRequest.eventName) {
      "START" -> handleStartEvent(eventRequest)
      else -> handleNonStartEvent(eventRequest)
    }
  }

  private suspend fun handleStartEvent(eventRequest: EventRequest) {
    eventService.updateSessionData(eventRequest)
    eventService.saveEvent(eventRequest)
  }

  private suspend fun handleNonStartEvent(eventRequest: EventRequest) {
    eventRequest.session = eventService.findSession(eventRequest.sessionId)?.data
    eventService.saveEvent(eventRequest)
  }
}

