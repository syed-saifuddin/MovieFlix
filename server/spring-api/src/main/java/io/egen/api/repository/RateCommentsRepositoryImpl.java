package io.egen.api.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import org.springframework.stereotype.Repository;
import io.egen.api.entity.RateComments;

@Repository
public class RateCommentsRepositoryImpl implements RateCommentsRepository{

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<RateComments> findAll() {
		return em.createNamedQuery("Comments.findAll", RateComments.class).getResultList();
	}

	@Override
	public RateComments findOne(String id) {
		return em.find(RateComments.class, id);
	}
	
	
	@Override
	public List<RateComments> findCommentsByMovie(String movieid) {
		TypedQuery<RateComments> query = em.createNamedQuery("Comments.findByMovie", RateComments.class);
		query.setParameter("pMovie", movieid);
		
		List<RateComments> comments = query.getResultList();
		if (comments != null) {
			return comments;
		} else {
			return null;
		}
	}
	
	@Override
	public RateComments create(RateComments cmnt) {
		em.persist(cmnt);
		return cmnt;
	}

	@Override
	public RateComments update(RateComments cmnt) {
		return em.merge(cmnt);
	}

	@Override
	public void delete(String id) {
		em.remove(id);
	}


}
