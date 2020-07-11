package us.openapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;

import us.openapi.api.request.LoginRequest;
import us.openapi.api.response.LoginResponse;
import us.openapi.exceptions.InvalidCredentialException;
import us.openapi.models.User;
import us.openapi.repository.UserRepository;

@Service
@Qualifier("userService")
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
	public LoginResponse login(LoginRequest request) throws InvalidCredentialException{
		LoginResponse loginResponse = new LoginResponse();
		loginResponse.setToken("");
		loginResponse.setUser(null);
		
		try {
			User user = userRepository.findByEmail(request.getEmail());
			
			if (user == null) {
				throw new InvalidCredentialException();
			}
			if (!user.getPasswordHash().equals(request.getPassword())) {	
				throw new InvalidCredentialException();
			}
			
			Algorithm algorithm = Algorithm.HMAC256("secret");
		    String token = JWT.create()
		        .withIssuer("auth0")
		        .sign(algorithm);
		    
		    loginResponse.setUser(user);
			loginResponse.setToken(token);
			return loginResponse;
			
			
		} catch(JWTCreationException exception) {
			return loginResponse;
		}
	}

	@Override
	public void saveUser(User user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}

}
