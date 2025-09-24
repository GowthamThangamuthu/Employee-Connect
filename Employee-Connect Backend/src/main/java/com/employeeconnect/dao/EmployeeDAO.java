package com.employeeconnect.dao;

import org.springframework.stereotype.Repository;

import com.employeeconnect.model.Employee;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface EmployeeDAO extends JpaRepository<Employee,Long>{
	Optional<Employee> findByEmail(String mail);
	List<Employee> findByRoleRole(String role);
	
	
	
}
