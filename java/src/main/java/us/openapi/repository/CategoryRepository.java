package us.openapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import us.openapi.models.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
		
	}


