package io.egen.api.repository;

import java.util.List;
import io.egen.api.entity.RateComments;

public interface RateCommentsRepository {

	public List<RateComments> findAll();
	
	public List<RateComments> findCommentsByMovie(String movieid);

	public RateComments findOne(String id);
	
	public RateComments create(RateComments cmnt);

	public RateComments update(RateComments cmnt);

	public void delete(String id );
	
}
