package io.egen.api.service;

import java.util.List;

import io.egen.api.entity.User;

public interface UserService {

	public List<User> findAll();

	public User findOne(String id);

	public User create(User emp);

	public User update(String id, User emp);

	public void delete(String id);
}
