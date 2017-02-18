package io.egen.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.egen.api.entity.User;
import io.egen.api.exception.BadRequestException;
import io.egen.api.exception.EntityNotFoundException;
import io.egen.api.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;

	@Override
	@Transactional(readOnly = true)
	public List<User> findAll() {
		return repository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public User findOne(String id) {
		User emp = repository.findOne(id);
		if (emp == null) {
			throw new EntityNotFoundException("User not found");
		}
		return emp;
	}

	@Override
	@Transactional
	public User create(User emp) {
		User existing = repository.findByEmail(emp.getEmail());
		if (existing != null) {
			throw new BadRequestException("A User with this email already exists");
		}
		return repository.create(emp);
	}

	@Override
	@Transactional
	public User update(String id, User emp) {
		User existing = repository.findOne(id);
		if (existing == null) {
			throw new EntityNotFoundException("User not found");
		}
		return repository.update(emp);
	}

	@Override
	@Transactional
	public void delete(String id) {
		User existing = repository.findOne(id);
		if (existing == null) {
			throw new EntityNotFoundException("User not found");
		}
		repository.delete(existing);
	}
}