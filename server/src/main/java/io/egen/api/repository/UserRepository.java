package io.egen.api.repository;

import java.util.List;

import io.egen.api.entity.User;

public interface UserRepository {

	public List<User> findAll();

	public User findOne(String id);
	
	public User findByEmail(String email);

	public User create(User emp);

	public User update(User emp);

	public void delete(User emp);
}
