package us.openapi.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;

import us.openapi.models.Category;

public class CategoryRepositoryTest {
	protected CategoryRepository categoryRepository;

    @Test
    public void shouldGetAllUsers() {
        List<Category> categories = categoryRepository.findAll();
        System.out.println(categories);
        assertEquals(1, categories.size());

    }
    
    
    @Test
    public void testSave() {
    	Category category = new Category();
    	
        categoryRepository.save(category);
        assertTrue(category.getId() > 0);

      
    }
}
