package io.egen.api.service;

import java.util.List;

import io.egen.api.entity.Movie;

public interface MovieService {

	public List<Movie> findAll();
	
	public List<Movie> findByYear(String year);
	
	public List<Movie> findByType(String type);

	public Movie findOne(String id);

	public Movie create(Movie emp);

	public Movie update(String id, Movie emp);

	public void delete(String id);
}
