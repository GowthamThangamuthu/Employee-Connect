package com.employeeconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeeconnect.model.BU;
import com.employeeconnect.service.BUService;


@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v2/")
public class BUController {
	
	@Autowired
	private BUService service;
	@GetMapping("/bu")
	public ResponseEntity<List<BU>> getAll(){
		return service.getAll();
	}

}
