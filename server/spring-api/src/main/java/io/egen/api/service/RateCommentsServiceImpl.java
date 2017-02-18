package io.egen.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import io.egen.api.entity.RateComments;
import io.egen.api.exception.EntityNotFoundException;
import io.egen.api.repository.RateCommentsRepository;

@Service
public class RateCommentsServiceImpl implements RateCommentsService {

	@Autowired
	private RateCommentsRepository repository;
	
	@Override
	public List<RateComments> findCommentsByMovie(String movieId) {
		return repository.findCommentsByMovie(movieId);
	}
	
	@Override
	@Transactional(readOnly = true)
	public RateComments findOne(String id) {
		RateComments cmnt = repository.findOne(id);
		if (cmnt == null) {
			throw new EntityNotFoundException("Comment not found");
		}
		return cmnt;
	}
	
	@Override
	@Transactional
	public RateComments create(RateComments cmnt) {
		return repository.create(cmnt);
	}

	@Override
	public RateComments update(String id, RateComments cmnt) {
		RateComments existing = repository.findOne(id);
		if (existing == null) {
			throw new EntityNotFoundException("Comment not found");
		}
		return repository.update(cmnt);
	}

	@Override
	public void delete(String cmnt) {
		RateComments existing = repository.findOne(cmnt);
		if (existing == null) {
			throw new EntityNotFoundException("Comment not found");
		}
		repository.delete(existing.getId());
	}
	
}
