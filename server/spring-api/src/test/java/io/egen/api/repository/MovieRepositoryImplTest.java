package io.egen.api.repository;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.FlushModeType;
import javax.persistence.LockModeType;
import javax.persistence.Parameter;
import javax.persistence.Query;
import javax.persistence.TemporalType;
import javax.persistence.TypedQuery;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import io.egen.api.entity.Movie;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
@RunWith(MockitoJUnitRunner.class)
public class MovieRepositoryImplTest {

	@Mock
	private EntityManager em;
	
	@InjectMocks
	private MovieRepositoryImpl movieRepositoryImpl;
	
	
	@Test
	public void findAllTest() {
		List<Movie> expectedResults = new ArrayList<>();
		expectedResults.add(new Movie(UUID.randomUUID().toString(), "test-title", "test-year"));
        
        TypedQuery query = Mockito.mock(TypedQuery.class);
        Mockito.when(em.createNamedQuery(Mockito.anyString(), Matchers.<Class<Object>>anyObject())).thenReturn(query);
        Mockito.when(query.getResultList()).thenReturn(expectedResults);
        List<Movie> actualResults = movieRepositoryImpl.findAll();
        
        Assert.assertTrue(actualResults.size() == 1);
        Assert.assertEquals(actualResults.get(0).getId(), expectedResults.get(0).getId());
	}
	
	@Test
	public void findOneTest() {
		Movie expectedMovie = new Movie(UUID.randomUUID().toString(), "test-title", "test-year");
        
        Mockito.when(em.find(Movie.class, expectedMovie.getId())).thenReturn(expectedMovie);
        Movie actualMovie = movieRepositoryImpl.findOne(expectedMovie.getId());
        
        Assert.assertEquals(expectedMovie.getId(), actualMovie.getId());
        Assert.assertEquals(expectedMovie.getTitle(), actualMovie.getTitle());
        Assert.assertEquals(expectedMovie.getYear(), actualMovie.getYear());
	}
	
	@Test
	public void findByTitleTest() {
		Movie expectedMovie = new Movie(UUID.randomUUID().toString(), "test-title", "test-year");
//		expectedMovie.setType("test-type");
		
		List<Movie> expectedResults = new ArrayList<>();
		expectedResults.add(expectedMovie);
		
        TypedQuery query = Mockito.mock(TypedQuery.class);
        Mockito.when(em.createNamedQuery(Mockito.anyString(), Matchers.<Class<Object>>anyObject())).thenReturn(query);
        Mockito.when(query.setParameter(Mockito.anyString(), Mockito.anyString())).thenReturn(query);
        Mockito.when(query.getResultList()).thenReturn(expectedResults);
        Movie actualMovie = movieRepositoryImpl.findByTitle(expectedMovie.getTitle());

        Assert.assertEquals(expectedMovie.getId(), actualMovie.getId());
        Assert.assertEquals(expectedMovie.getTitle(), actualMovie.getTitle());
        Assert.assertEquals(expectedMovie.getYear(), actualMovie.getYear());
	}
}
