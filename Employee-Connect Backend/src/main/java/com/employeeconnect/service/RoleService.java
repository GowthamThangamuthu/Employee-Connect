package com.employeeconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.employeeconnect.dao.RoleDAO;
import com.employeeconnect.model.Role;

@Service
public class RoleService {
	
	@Autowired
	private RoleDAO repo;
	
	public ResponseEntity<List<Role>> getAll(){
		return new ResponseEntity<List<Role>>(repo.findAll(), HttpStatus.OK);
	}

}
