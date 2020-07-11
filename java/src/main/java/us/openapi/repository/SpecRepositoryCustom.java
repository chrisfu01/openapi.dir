package us.openapi.repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import us.openapi.models.Spec;

public interface SpecRepositoryCustom {
	Page<Spec> searchSpec(Pageable pageable);
}
