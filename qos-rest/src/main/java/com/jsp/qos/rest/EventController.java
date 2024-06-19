package com.jsp.qos.rest;

import com.jsp.qos.rest.repository.ActionRepository;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/api/events")
public class EventController {

  private final ActionRepository actionRepository;
  private final RedisTemplate<String, EventRequest> redisTemplate;

  public EventController(
    ActionRepository actionRepository,
    RedisTemplate<String, EventRequest> redisTemplate
  ) {
    this.actionRepository = actionRepository;
    this.redisTemplate = redisTemplate;
  }

  @PostMapping
  public void postEvent(@RequestBody EventRequest eventRequest) {
    if ("SESSION".equals(eventRequest.getEventName())) {
      redisTemplate.opsForValue().set(eventRequest.getSessionId(), eventRequest);
      redisTemplate.expire(eventRequest.getSessionId(), 6, TimeUnit.HOURS);
      actionRepository.save(eventRequest);
      return;
    }

    var sessionEvent = redisTemplate.opsForValue().get(eventRequest.getSessionId());
    if (sessionEvent == null) {
      return;
    }

    eventRequest.setSession(sessionEvent.getData());
    actionRepository.save(eventRequest);
  }
}
