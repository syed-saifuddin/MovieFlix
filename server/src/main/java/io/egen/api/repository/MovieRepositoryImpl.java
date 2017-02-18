package io.egen.api.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.egen.api.entity.Movie;

@Repository
public class MovieRepositoryImpl implements MovieRepository {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Movie> findAll() {
		return em.createNamedQuery("Movie.findAll", Movie.class).getResultList();
	}

	@Override
	public Movie findOne(String id) {
		return em.find(Movie.class, id);
	}

	@Override
	public Movie findByTitle(String title) {
		TypedQuery<Movie> query = em.createNamedQuery("Movie.findByTitle", Movie.class);
		query.setParameter("pTitle", title);

		List<Movie> movies = query.getResultList();
		if (movies != null && movies.size() == 1) {
			return movies.get(0);
		} else {
			return null;
		}
	}
	
	@Override
	public List<Movie> findByYear(String year) {
		TypedQuery<Movie> query = em.createNamedQuery("Movie.findByYear", Movie.class);
		query.setParameter("pYear", year);

		List<Movie> movies = query.getResultList();
		if (movies != null) {
			return movies;
		} else {
			return null;
		}
	}
	
	@Override
	public List<Movie> findByType(String type) {
		TypedQuery<Movie> query = em.createNamedQuery("Movie.findByType", Movie.class);
		query.setParameter("pType", type);

		List<Movie> movies = query.getResultList();
		if (movies != null) {
			return movies;
		} else {
			return null;
		}
	}

	@Override
	public Movie create(Movie emp) {
		em.persist(emp);
		return emp;
	}

	@Override
	public Movie update(Movie emp) {
		return em.merge(emp);
	}

	@Override
	public void delete(Movie emp) {
		em.remove(emp);
	}
}