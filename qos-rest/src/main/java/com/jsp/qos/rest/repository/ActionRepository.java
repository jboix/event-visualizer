package com.jsp.qos.rest.repository;

import com.jsp.qos.rest.EventRequest;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActionRepository extends ElasticsearchRepository<EventRequest, String> {
}
