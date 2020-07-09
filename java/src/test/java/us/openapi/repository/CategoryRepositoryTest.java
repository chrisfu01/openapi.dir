package us.openapi.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import us.openapi.models.Category;

//@SpringBootTest
@DataJpaTest
@ActiveProfiles("test")
public class CategoryRepositoryTest {
	@Autowired
	protected CategoryRepository categoryRepository;

    @Test
    public void shouldGetAllCategories() {
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
