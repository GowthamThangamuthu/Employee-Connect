package com.employeeconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeeconnect.model.Meeting;
import com.employeeconnect.request.MeetingRequest;
import com.employeeconnect.service.MeetingService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v2/")
public class MeetingController {
	@Autowired
	private MeetingService service;
	
	
	@PreAuthorize("hasRole('ROLE_HR')")
	@PostMapping("/meet")
	public ResponseEntity<Meeting> newMeet(@RequestBody MeetingRequest req) throws Exception{
		return service.newMeet(req);
	}
	@GetMapping("/meet/id={id}")
	public ResponseEntity<Meeting> findById(@PathVariable Long id){
		return service.findById(id);
	}
	@GetMapping("/meet/mail={mail}/status={status}")
	public ResponseEntity<List<Meeting>> getMeetOfHrByStatus(@PathVariable String mail, @PathVariable int status){
		return service.getMeetOfHrByStatus(mail,status);
	}
	@GetMapping("/meet/emp/mail={mail}/status={status}")
	public ResponseEntity<List<Meeting>> getMeetOfEmployeeByStatus(@PathVariable String mail, @PathVariable int status){
		return service.getMeetOfEmployeeByStatus(mail,status);
	}
	@PutMapping("/meet-id={id}/status={status}")
	public ResponseEntity<Meeting> updateStatus(@PathVariable Long id, @PathVariable int status){
		return service.updateStatus(id,status);
	}
	@PreAuthorize("hasRole('ROLE_HR')")
	@PutMapping("/meet-id={id}")
	public ResponseEntity<Meeting> updateMeetComplete(@PathVariable Long id, @RequestBody MeetingRequest req){
		return service.updateMeetComplete(id,req);
	}
	@PreAuthorize("hasRole('ROLE_Employee') or hasRole('ROLE_Manager')")
	@PutMapping("meet-id={id}/rem")
	public ResponseEntity<Meeting> updateRemarks(@PathVariable Long id,@RequestBody MeetingRequest req){
		System.out.println(id);
		return service.updateRemarks(id,req);
		
	}
	@GetMapping("/meet/mail={mail}/quater={quater}")
	public ResponseEntity<List<Meeting>> getMeetByQuater(@PathVariable String mail,@PathVariable int quater){
		return service.getMeetByQuater(mail,quater);
	}
	@GetMapping("/meet/bu={id}/quater={quater}")
	public ResponseEntity<List<Meeting>> getMeetByQuaterBu(@PathVariable Long id, @PathVariable int quater){
		return service.getMeetByQuaterBu(id,quater);
	}
}
