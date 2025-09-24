package com.employeeconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.employeeconnect.dao.AdminDAO;
import com.employeeconnect.dao.EmployeeDAO;
import com.employeeconnect.dao.RoleDAO;
import com.employeeconnect.model.Admin;
import com.employeeconnect.model.Role;
import com.employeeconnect.model.Employee;
import com.employeeconnect.request.AdminRequest;

@Service
public class AdminService {
	@Autowired
	private AdminDAO repo;
	
	@Autowired
	private EmployeeDAO empRepo;
	
	@Autowired 
	private RoleDAO roleRepo;
	
	public ResponseEntity<List<Admin>> getAll(){
		return new ResponseEntity<List<Admin>>(repo.findAll(),HttpStatus.CREATED);
	}
	
	public ResponseEntity<Admin> addAdmin(AdminRequest req) throws Exception{
		Employee employee = empRepo.findByEmail(req.getEmployee()).orElseThrow(()->new Exception("USER NOT FOUND"));
		
		Role role = roleRepo.findById(req.getRole()).orElse(null);
		if(role==null)return null;
		Admin admin = new Admin();
		admin.setRole(role);
		admin.setEmployee(employee);
		admin.setComments(req.getComments());
		Admin saved = repo.save(admin);
		return new ResponseEntity<Admin>(saved,HttpStatus.CREATED);
	}
	
	public ResponseEntity<Admin> findById(Long id){
		Admin admin = repo.findById(id).orElse(null);
		return new ResponseEntity<Admin>(admin,HttpStatus.CREATED);
	}
	
	public ResponseEntity<Boolean> delete(Long id){
		Admin admin = repo.findById(id).orElse(null);
		if(admin==null)return null;
		repo.delete(admin);
		return new ResponseEntity<Boolean>(Boolean.TRUE, HttpStatus.NO_CONTENT);
	}
}
