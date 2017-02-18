package io.egen.api.service;

import java.util.List;
import io.egen.api.entity.RateComments;

public interface RateCommentsService {
	
	public List<RateComments> findCommentsByMovie(String movieId);
	
	public RateComments findOne(String id);
	
	public RateComments create(RateComments cmnt);
	
	public RateComments update(String id, RateComments cmnt);
	
	public void delete(String id);

}
