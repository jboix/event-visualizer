package com.jsp.qos.rest;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/api/events")
public class EventController {

  private static final String TOPIC = "actions";

  private final KafkaTemplate<String, Object> kafkaTemplate;
  private final RedisTemplate<String, EventRequest> redisTemplate;

  public EventController(
    KafkaTemplate<String, Object> kafkaTemplate,
    RedisTemplate<String, EventRequest> redisTemplate
  ) {
    this.kafkaTemplate = kafkaTemplate;
    this.redisTemplate = redisTemplate;
  }

  @PostMapping
  public void postEvent(@RequestBody EventRequest eventRequest) {
    if ("SESSION".equals(eventRequest.getEventName())) {
      redisTemplate.opsForValue().set(eventRequest.getSessionId(), eventRequest);
      redisTemplate.expire(eventRequest.getSessionId(), 6, TimeUnit.HOURS);
      kafkaTemplate.send(TOPIC, eventRequest.getSessionId(), eventRequest);
      return;
    }

    var sessionEvent = redisTemplate.opsForValue().get(eventRequest.getSessionId());
    if (sessionEvent == null) {
      return;
    }

    eventRequest.setSession(sessionEvent.getData());
    kafkaTemplate.send(TOPIC, eventRequest.getSessionId(), eventRequest);
  }
}
