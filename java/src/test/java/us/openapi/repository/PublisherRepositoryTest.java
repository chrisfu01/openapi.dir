package us.openapi.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;

import us.openapi.models.Publisher;

public class PublisherRepositoryTest {
	protected PublisherRepository publisherRepository;

    @Test
    public void shouldGetAllPubs() {
        List<Publisher> pubs = publisherRepository.findAll();
        System.out.println(pubs);
        assertEquals(1, pubs.size());

    }
    
    
    @Test
    public void testSave() {
    	Publisher pub = new Publisher();
    	
        publisherRepository.save(pub);
        assertTrue(pub.getId() > 0);

      
    }
}
