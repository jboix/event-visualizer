package com.jsp.qos.rest;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.DateFormat;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Data
@Document(indexName = "actions", createIndex = false)
public class EventRequest {

  @Id
  @JsonIgnore
  private String id;

  @JsonProperty("session_id")
  @Field("session_id")
  private String sessionId;

  @JsonProperty("event_name")
  @Field("event_name")
  private String eventName;

  @Field(type = FieldType.Date, format = DateFormat.epoch_millis, name = "@timestamp")
  private Long timestamp;

  private Object data;
  private Object session;
}
