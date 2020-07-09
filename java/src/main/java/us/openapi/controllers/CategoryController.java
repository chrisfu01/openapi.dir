package us.openapi.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import us.openapi.models.Category;
import us.openapi.models.User;
import us.openapi.service.CategoryService;
import us.openapi.service.UserService;

@RestController
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping(value = "/category", method = RequestMethod.GET)
	public Collection<Category> findCategoryCollection() {
		return categoryService.getAllCategories();
	}
}
