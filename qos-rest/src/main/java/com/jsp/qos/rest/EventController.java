package com.jsp.qos.rest;

import com.jsp.qos.rest.repository.ActionRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/events")
public class EventController {

  private final ActionRepository actionRepository;

  public EventController(ActionRepository actionRepository) {
    this.actionRepository = actionRepository;
  }

  @PostMapping
  public void postEvent(@RequestBody EventRequest eventRequest) {
    if ("START".equals(eventRequest.getEventName())) {
      actionRepository.save(eventRequest);
      return;
    }

    var sessionEventOptional = actionRepository.findBySessionIdAndEventName(eventRequest.getSessionId(), "START");
    if (sessionEventOptional.isEmpty()) {
      return;
    }

    var sessionEvent = sessionEventOptional.get();
    eventRequest.setSession(sessionEvent.getData());
    actionRepository.save(eventRequest);
  }
}
