package com.employeeconnect.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.employeeconnect.dao.EmployeeDAO;
import com.employeeconnect.model.Employee;
import com.employeeconnect.util.MyUserDetails;


@Service
public class MyUserDetailsService implements UserDetailsService{
	
	@Autowired
	private EmployeeDAO repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Employee> emp = repo.findByEmail(username);
		emp.orElseThrow(()->new UsernameNotFoundException("USER NOT FOUND"));
		return emp.map(MyUserDetails::new).get();
	}
	
	

}
