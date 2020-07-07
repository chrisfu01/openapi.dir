package us.openapi.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import us.openapi.models.Spec;

@RestController
public class SpecController {
	
	@RequestMapping(value = "/urlify", method = RequestMethod.POST)
	public void postSpecByUrl(String url) {
		
	}
	
	@RequestMapping(value = "/yaml/:id", method = RequestMethod.GET)
	public Spec findSpecById(int id) {
		return null;
	}
	
	@RequestMapping(value = "/specs", method = RequestMethod.GET)
	public Collection<Spec> findSpecCollection() {
		List<Spec> specsList = new ArrayList<>();
		return specsList;
	}
}
