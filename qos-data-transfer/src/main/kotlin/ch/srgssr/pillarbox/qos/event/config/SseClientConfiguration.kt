package ch.srgssr.pillarbox.qos.event.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.NestedConfigurationProperty
import org.springframework.context.annotation.Configuration
import reactor.util.retry.Retry
import reactor.util.retry.RetryBackoffSpec
import java.time.Duration

/**
 * Configuration class for Server-Sent Events (SSE) client settings in the application.
 * This class is mapped to properties prefixed with `pillarbox.qos.sse` in the application's configuration files.
 *
 * @property uri The URI for the SSE endpoint. Defaults to "http://localhost:8080".
 * @property retry Configuration for retry behavior in case of connection failures.
 */
@Configuration
@ConfigurationProperties(prefix = "pillarbox.qos.sse")
data class SseClientConfiguration(
  var uri: String = "http://localhost:8080",
  @NestedConfigurationProperty
  var retry: RetryProperties = RetryProperties()
)

/**
 * Configuration class for retry behavior, used within [SseClientConfiguration].
 *
 * @property maxAttempts The maximum number of retry attempts. Defaults to 5.
 * @property initialInterval The initial interval between retry attempts. Defaults to 5 seconds.
 * @property maxInterval The maximum interval between retry attempts. Defaults to 1 minute.
 */
data class RetryProperties(
  var maxAttempts: Long = 5,
  var initialInterval: Duration = Duration.ofSeconds(5),
  var maxInterval: Duration = Duration.ofMinutes(1)
) {
  /**
   * Creates a [RetryBackoffSpec] based on the retry properties.
   * This specification defines the backoff strategy for retries,
   * including the number of attempts and interval timings.
   *
   * @return A configured [RetryBackoffSpec] for use with Reactor's retry mechanism.
   */
  fun create(): RetryBackoffSpec = Retry
    .backoff(maxAttempts, initialInterval)
    .maxBackoff(maxInterval)

}
