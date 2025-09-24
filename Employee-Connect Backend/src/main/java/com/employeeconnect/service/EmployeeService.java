package com.employeeconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.employeeconnect.dao.BUDAO;
import com.employeeconnect.dao.EmployeeDAO;
import com.employeeconnect.dao.RoleDAO;
import com.employeeconnect.model.BU;
import com.employeeconnect.model.Employee;
import com.employeeconnect.model.Role;
import com.employeeconnect.request.EmployeeRequest;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeDAO repo;
	
	@Autowired
	private RoleDAO roleRepo;
	
	@Autowired
	private BUDAO bURepo;
	
	public ResponseEntity<List<Employee>> getAll(){
		return new ResponseEntity<List<Employee>>(repo.findAll(), HttpStatus.OK);
	}
	
	public ResponseEntity<Employee> newEmployee(EmployeeRequest req){
		Employee employee = new Employee();
		employee.setName(req.getName());
		employee.setEmail(req.getEmail());
		employee.setRole(roleRepo.findById((long)1).orElse(null));
		Employee created = repo.save(employee);
		return new ResponseEntity<Employee>(created, HttpStatus.CREATED);
	}
	
	public ResponseEntity<Employee> updateEmployee(Long id, EmployeeRequest req){
		
		Employee employee = findById(id).getBody();
		if(employee==null)return null;
		Role role = roleRepo.findById(req.getRole()).orElse(null);
		if(role==null)return null;
		Employee manager = null;
		if(req.getManager()!=null) {
			manager = findById(req.getManager()).getBody();
		}
		BU bu = null;
		if(req.getBu()!=null) {
			bu = bURepo.findById(req.getBu()).orElse(null);
		}
		employee.setManager(manager);
		employee.setBu(bu);
		employee.setRole(role);
		Employee created = repo.save(employee);
		return new ResponseEntity<Employee>(created, HttpStatus.CREATED);
	}
	
	public ResponseEntity<Employee> findById(Long id){
		Employee employee = repo.findById(id).orElse(null);
		return new ResponseEntity<Employee>(employee, HttpStatus.CREATED);
	}
	
	public ResponseEntity<Employee> findByEmail(String mail) throws Exception{
		Employee emp = repo.findByEmail(mail).orElseThrow(()->new Exception("USER NOT FOUND"));
		return new ResponseEntity<Employee>(emp, HttpStatus.OK);
	}
	
	public Employee customFindByEmail(String mail){
		System.out.println(mail);
		Employee emp = repo.findByEmail(mail).orElse(null);
		return emp;
	}
	
	public ResponseEntity<List<Employee>> findByRole(String role){
		List<Employee> emp =  repo.findByRoleRole(role);
		return new ResponseEntity<List<Employee>>(emp, HttpStatus.OK);
	}
	
}
