package us.openapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import us.openapi.models.Publisher;
import us.openapi.repository.PublisherRepository;

@Service
@Transactional
public class PublisherServiceImpl implements PublisherService {

	@Autowired
	private PublisherRepository publisherRepository;
	
	
	@Override
	public List<Publisher> getAllPublishers() {
		// TODO Auto-generated method stub
		return publisherRepository.findAll();
	}


	@Override
	public void savePublisher(Publisher publisher) throws DataAccessException {
		// TODO Auto-generated method stub
		publisherRepository.save(publisher);
	}

}
