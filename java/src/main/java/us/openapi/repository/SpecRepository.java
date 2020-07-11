package us.openapi.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import us.openapi.models.Spec;

public interface SpecRepository extends JpaRepository<Spec, Integer>, SpecRepositoryCustom{
		
}


