package us.openapi.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import us.openapi.api.request.LoginRequest;
import us.openapi.api.response.LoginResponse;
import us.openapi.exceptions.InvalidCredentialException;

@SpringBootTest
@AutoConfigureTestDatabase
@ActiveProfiles("test")
public class UserServiceTest {
	@Autowired
	protected UserService userService;
	
	@Test
	public void testLoginSuccess() throws InvalidCredentialException {
		LoginRequest request = new LoginRequest();
		String email = "demo@demo.com";
		String password = "$2a$10$sFcDZ0hAFIxLyN7SQtwjMeA3KQeU94F7lFz150bYc2fUE9pv9Zv/K";
		request.setEmail(email);
		request.setPassword(password);
		LoginResponse response = userService.login(request);
		assertEquals("John", response.getUser().getFirstname());
	}
	
	@Test
	public void testLoginEmailNotFound() throws InvalidCredentialException {
		LoginRequest request = new LoginRequest();
		String email = "";
		String password = "";
		request.setEmail(email);
		request.setPassword(password);
		LoginResponse response = userService.login(request);
		assertEquals("John", response.getUser().getFirstname());
	}
	
	@Test
	public void testLoginIncorrectPassword() throws InvalidCredentialException {
		LoginRequest request = new LoginRequest();
		String email = "demo@demo.com";
		String password = "";
		request.setEmail(email);
		request.setPassword(password);
		LoginResponse response = userService.login(request);
		assertEquals("John", response.getUser().getFirstname());
	}
}
