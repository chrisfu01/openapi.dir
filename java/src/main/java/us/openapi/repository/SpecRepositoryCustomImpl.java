package us.openapi.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import us.openapi.models.Spec;

public class SpecRepositoryCustomImpl implements SpecRepositoryCustom {

	@Autowired
    private EntityManager entityManager;
	
	@Override
	public Page<Spec> searchSpec(Pageable pageable) {
		String from = "from Spec s"; 
		String where = ""; 
		
		String countSql = "select count(*) " + from; 
		String rowSql = "select s " + from;
		
		TypedQuery<Long> countQuery = entityManager.createQuery(countSql, Long.class); 
		long count = countQuery.getSingleResult();
		
		TypedQuery<Spec> rowQuery = entityManager.createQuery(rowSql, Spec.class); 
		rowQuery.setFirstResult((int)pageable.getOffset()); 
		rowQuery.setMaxResults(pageable.getPageSize()); 
		List<Spec> rows = rowQuery.getResultList();
		
		return new PageImpl<>(rows, pageable, count);
	}

}
