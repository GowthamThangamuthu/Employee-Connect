package com.employeeconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.employeeconnect.dao.BUDAO;
import com.employeeconnect.model.BU;

@Service
public class BUService {
	@Autowired
	private BUDAO repo;
	
	public ResponseEntity<List<BU>> getAll(){
		return new ResponseEntity<List<BU>>(repo.findAll(), HttpStatus.OK);
	}

}
