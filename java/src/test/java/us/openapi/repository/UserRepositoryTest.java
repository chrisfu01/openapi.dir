package us.openapi.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import us.openapi.models.User;

//@SpringBootTest
@DataJpaTest
@ActiveProfiles("test")
public class UserRepositoryTest {
	@Autowired
    protected UserRepository userRepository;

    @Test
    public void shouldGetAllUsers() {
        List<User> users = userRepository.findAll();
        System.out.println(users);
        assertEquals(1, users.size());
        
    }
    
    
    @Test
    public void testSave() {
    	User user = new User();
    	
        userRepository.save(user);
        assertTrue(user.getId() > 0);

      
    }
    
}
