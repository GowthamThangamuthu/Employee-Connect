package com.employeeconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeeconnect.model.Admin;
import com.employeeconnect.request.AdminRequest;
import com.employeeconnect.service.AdminService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v2/")
public class AdminController {
	@Autowired
	private AdminService service;
	@GetMapping("/admin-notif")
	public ResponseEntity<List<Admin>> getAll(){
		return service.getAll();
	}
	@PostMapping("/admin-notif")
	public ResponseEntity<Admin> addAdmin(@RequestBody AdminRequest req) throws Exception{
		System.out.println(req);
		return service.addAdmin(req);
	}
	@GetMapping("/admin-notif/{id}")
	public ResponseEntity<Admin> findById(@PathVariable Long id){
		return service.findById(id);
	}
	@PreAuthorize("hasRole('ROLE_Admin')")
	@DeleteMapping("/admin-notif/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable Long id){
		return service.delete(id);
	}
	
	
}
