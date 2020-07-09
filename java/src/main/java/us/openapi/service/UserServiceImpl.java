package us.openapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import us.openapi.api.request.LoginRequest;
import us.openapi.api.response.LoginResponse;
import us.openapi.models.User;
import us.openapi.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	
	/*@Autowired
	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}*/
	
	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public LoginResponse login(LoginRequest request) {
		// userRepository.findByEmail(request.getEmail());
		return null; 
	}

}
