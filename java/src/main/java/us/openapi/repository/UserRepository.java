package us.openapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import us.openapi.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	User findByEmail(String email); 
}
