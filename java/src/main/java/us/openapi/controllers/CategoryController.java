package us.openapi.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import us.openapi.models.Category;
import us.openapi.models.User;

@RestController
public class CategoryController {
	
	@RequestMapping(value = "/category", method = RequestMethod.GET)
	public Collection<Category> findCategoryCollection() {
		
		List<Category> userList = new ArrayList<>();
		return userList;
	}
}
