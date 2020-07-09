package us.openapi.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import us.openapi.models.Spec;
import us.openapi.service.SpecService;

@RestController
public class SpecController {
	
	@Autowired
	private SpecService specService;
	
	@RequestMapping(value = "/urlify", method = RequestMethod.POST)
	public void postSpecByUrl(String url) {
		
	}
	
	@RequestMapping(value = "/yaml/:id", method = RequestMethod.GET)
	public Spec findSpecById(int id) {
		return null;
	}
	
	@RequestMapping(value = "/specs", method = RequestMethod.GET)
	public Collection<Spec> findSpecCollection() {
		return specService.getAllSpecs();
	}
}
