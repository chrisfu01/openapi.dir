package us.openapi.service;

import java.util.List;

import us.openapi.api.request.LoginRequest;
import us.openapi.api.response.LoginResponse;
import us.openapi.exceptions.InvalidCredentialException;
import us.openapi.models.User;

public interface UserService {
	List<User> getAllUsers();
	void saveUser(User user);
	LoginResponse login(LoginRequest request) throws InvalidCredentialException;
}
