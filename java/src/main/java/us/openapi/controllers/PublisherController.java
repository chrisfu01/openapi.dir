package us.openapi.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import us.openapi.models.Publisher;
import us.openapi.service.PublisherService;

@RestController
public class PublisherController {
	
	@Autowired
	private PublisherService publisherService;
	
	@RequestMapping(value = "/company_register", method = RequestMethod.POST)
	public void companyRegister() {
		
	}
	
	@RequestMapping(value = "/pub", method = RequestMethod.GET)
	public Collection<Publisher> findUserCollection() {
		return publisherService.getAllPublishers();
	}
}
