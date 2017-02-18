package io.egen.api.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.egen.api.entity.User;

@Repository
public class UserRepositoryImpl implements UserRepository {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<User> findAll() {
		TypedQuery<User> query = em.createNamedQuery("User.findAll", User.class);
		return query.getResultList();
	}

	@Override
	public User findOne(String id) {
		return em.find(User.class, id);
	}

	@Override
	public User findByEmail(String email) {
		TypedQuery<User> query = em.createNamedQuery("User.findByEmail", User.class);
		query.setParameter("pEmail", email);

		List<User> employees = query.getResultList();
		if (employees != null && employees.size() == 1) {
			return employees.get(0);
		} else {
			return null;
		}
	}

	@Override
	public User create(User emp) {
		em.persist(emp);
		return emp;
	}

	@Override
	public User update(User emp) {
		return em.merge(emp);
	}

	@Override
	public void delete(User emp) {
		em.remove(emp);
	}
}