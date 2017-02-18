package io.egen.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.egen.api.entity.RateComments;
import io.egen.api.service.RateCommentsService;

@RestController
@RequestMapping(value = "comments")
public class RateCommentsController {

	@Autowired
	private RateCommentsService service;
	
	@RequestMapping(method = RequestMethod.GET, path = "movies/{movieId}")
	public List<RateComments> findCommentsByMovie(@PathVariable("movieId") String movieId) {
		return service.findCommentsByMovie(movieId);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public RateComments findOne(@RequestParam(value ="id") String cmntId) {
		return service.findOne(cmntId);
	}

	@RequestMapping(method = RequestMethod.POST)
	public RateComments create(@RequestBody RateComments cmnt) {
		return service.create(cmnt);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "{id}")
	public RateComments update(@PathVariable("id") String id, @RequestBody RateComments cmnt) {
		return service.update(id, cmnt);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "{id}")
	public void delete(@PathVariable("id") String id) {
		service.delete(id);
	}
}