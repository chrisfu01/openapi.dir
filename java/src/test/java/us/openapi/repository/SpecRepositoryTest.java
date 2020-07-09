package us.openapi.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import us.openapi.models.Spec;

//@SpringBootTest
@DataJpaTest
@ActiveProfiles("test")
public class SpecRepositoryTest {
	@Autowired
	protected SpecRepository specRepository;

    @Test
    public void shouldGetAllSpecs() {
        List<Spec> specs = specRepository.findAll();
        System.out.println(specs);
        assertEquals(1, specs.size());

    }
    
    @Test
    public void testSave() {
    	Spec spec = new Spec();
        specRepository.save(spec);
        assertTrue(spec.getId() > 0);

      
    }
}
