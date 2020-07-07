package us.openapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import us.openapi.models.Publisher;

public interface PublisherRepository extends JpaRepository<Publisher, Integer> {
	
}
