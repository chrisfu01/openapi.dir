package us.openapi.service;
import java.util.List;

import us.openapi.models.Spec;


public interface SpecService {
	public List<Spec> getAllSpecs();
	public Spec findSpecById(int id);
}
