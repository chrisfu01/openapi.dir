package us.openapi.service;

import java.util.List;

import us.openapi.api.request.LoginRequest;
import us.openapi.api.response.LoginResponse;
import us.openapi.models.User;

public interface UserService {
	List<User> getAllUsers();

	LoginResponse login(LoginRequest request);
}
