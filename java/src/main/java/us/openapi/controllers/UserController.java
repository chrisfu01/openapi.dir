package us.openapi.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import us.openapi.api.request.LoginRequest;
import us.openapi.api.response.LoginResponse;
import us.openapi.models.User;
import us.openapi.repository.UserRepository;
import us.openapi.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	/**
	 * Read List of User
	 */
	
	/*
	 'POST /user': 'UserController.register',
	  'POST /register': 'UserController.register', // alias for POST /user
	  
	  'POST /login': 'UserController.login',
	  'POST /validate': 'UserController.validate',
	*/
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public LoginResponse login(@RequestBody LoginRequest request) {
		return userService.login(request);
	}
	
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public Collection<User> findUserCollection() {
		return userService.getAllUsers();
	}
}
