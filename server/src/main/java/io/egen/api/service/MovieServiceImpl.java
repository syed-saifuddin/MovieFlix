package io.egen.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.egen.api.entity.Movie;
import io.egen.api.exception.BadRequestException;
import io.egen.api.exception.EntityNotFoundException;
import io.egen.api.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {

	@Autowired
	private MovieRepository repository;

	@Override
	@Transactional(readOnly = true)
	public List<Movie> findAll() {
		return repository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Movie findOne(String id) {
		Movie emp = repository.findOne(id);
		if (emp == null) {
			throw new EntityNotFoundException("Movie not found");
		}
		return emp;
	}
	
	@Override
	@Transactional(readOnly = true)
	public List<Movie> findByYear(String year) {
		List<Movie> existing = repository.findByYear(year);
		if (existing == null){
			throw new BadRequestException("Movies with this Year does not Exist");
		}
		else
		return existing;
	}
	
	@Override
	@Transactional(readOnly = true)
	public List<Movie> findByType(String type) {
		List<Movie> existing = repository.findByType(type);
		if (existing == null){
			throw new BadRequestException("Content with this type does not Exist");
		}
		else
		return existing;
	}

	@Override
	@Transactional
	public Movie create(Movie emp) {
		Movie existing = repository.findByTitle(emp.getTitle());
		if (existing != null) {
			throw new BadRequestException("A Movie with this title already exists");
		}
		return repository.create(emp);
	}

	@Override
	@Transactional
	public Movie update(String id, Movie emp) {
		Movie existing = repository.findOne(id);
		if (existing == null) {
			throw new EntityNotFoundException("Movie not found");
		}
		return repository.update(emp);
	}

	@Override
	@Transactional
	public void delete(String id) {
		Movie existing = repository.findOne(id);
		if (existing == null) {
			throw new EntityNotFoundException("Movie not found");
		}
		repository.delete(existing);
	}
}