package com.jsp.qos.rest;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Data
public class EventRequest {
  @JsonProperty("session_id")
  private String sessionId;

  @JsonProperty("event_name")
  private String eventName;

  private Long timestamp;

  private Object data;
  private Object session;

  // This field will be used only for serialization
  @JsonProperty(value = "@timestamp", access = JsonProperty.Access.READ_ONLY)
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "UTC")
  public LocalDateTime getTimestampISO() {
    return LocalDateTime.ofInstant(Instant.ofEpochMilli(this.timestamp), ZoneOffset.UTC);
  }
}
