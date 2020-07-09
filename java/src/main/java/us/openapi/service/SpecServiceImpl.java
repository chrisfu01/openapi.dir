package us.openapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import us.openapi.models.Spec;
import us.openapi.repository.SpecRepository;

@Service
@Transactional
public class SpecServiceImpl implements SpecService{
	@Autowired
	private SpecRepository specRepository;
	
	@Override
	public List<Spec> getAllSpecs() {
		return specRepository.findAll();
	}

	@Override
	public Spec findSpecById(int id) {
		// TODO Auto-generated method stub
		Optional<Spec> optionalSpec = specRepository.findById(id);
		if (optionalSpec.isPresent()) {
			return optionalSpec.get();
		}
		return null;
	}

}
