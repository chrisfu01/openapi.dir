package us.openapi.service;

import java.util.List;

import org.springframework.dao.DataAccessException;

import us.openapi.models.Publisher;

public interface PublisherService {
	void savePublisher(Publisher publisher) throws DataAccessException;
	public List<Publisher> getAllPublishers();
}
