package io.egen.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.egen.api.entity.Movie;
import io.egen.api.service.MovieService;

@RestController
@RequestMapping(value = "movies")
public class MovieController {

	@Autowired
	private MovieService service;

	@RequestMapping(method = RequestMethod.GET)
	public List<Movie> findAll() {
		return service.findAll();
	}
	
	@RequestMapping(method = RequestMethod.GET, params= "year")
	public List<Movie> findByYear(@RequestParam(value= "year") String year) {
		return service.findByYear(year);
	}
	
	@RequestMapping(method = RequestMethod.GET, params= "type")
	public List<Movie> findByType(@RequestParam(value= "type") String type) {
		return service.findByType(type);
	}

	@RequestMapping(method = RequestMethod.GET, params = "id")
	public Movie findOne(@RequestParam(value ="id") String empId) {
		return service.findOne(empId);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Movie create(@RequestBody Movie emp) {
		return service.create(emp);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "{id}")
	public Movie update(@PathVariable("id") String id, @RequestBody Movie emp) {
		return service.update(id, emp);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "{id}")
	public void delete(@PathVariable("id") String id) {
		service.delete(id);
	}
}