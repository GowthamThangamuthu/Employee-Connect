package com.employeeconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.employeeconnect.model.AuthenticationResponse;
import com.employeeconnect.model.Employee;
import com.employeeconnect.model.Role;
import com.employeeconnect.request.EmployeeRequest;
import com.employeeconnect.service.EmployeeService;
import com.employeeconnect.util.JwtUtil;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v2/")
public class EmployeeController {
	
	@Autowired
	private EmployeeService service;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtUtil jwtTokenUtil;
	
	@PostMapping("/auth")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody EmployeeRequest req) throws Exception {
		Employee emp = service.customFindByEmail(req.getEmail());
		System.out.println(emp);
		if(emp==null) {
			service.newEmployee(req);
		}
		
		

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(req.getEmail(), "password"));
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect mail or password", e);
		}


		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(req.getEmail());

		final String jwt = jwtTokenUtil.generateToken(userDetails);
		
		Role role = service.customFindByEmail(req.getEmail()).getRole();

		return ResponseEntity.ok(new AuthenticationResponse(jwt,role.getRole()));
	}
	
	
	@PreAuthorize("hasRole('ROLE_Admin')")
	@PutMapping("/update-employee/{id}")
	public ResponseEntity<Employee> updateEmp(@PathVariable Long id ,@RequestBody EmployeeRequest req){
		return service.updateEmployee(id, req);
	}
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> findById(@PathVariable Long id){
		return service.findById(id);
	}
	@GetMapping("/employee/mail={mail}")
	public ResponseEntity<Employee> findByEmail(@PathVariable String mail) throws Exception{
		return service.findByEmail(mail);
	}
	@GetMapping("/employee/role={role}")
	public ResponseEntity<List<Employee>> findByRole(@PathVariable String role){
		return service.findByRole(role);
	}
}
