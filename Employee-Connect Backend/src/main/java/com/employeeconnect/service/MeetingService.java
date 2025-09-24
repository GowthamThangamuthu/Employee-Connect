package com.employeeconnect.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.employeeconnect.dao.EmployeeDAO;
import com.employeeconnect.dao.MeetingDAO;
import com.employeeconnect.model.Employee;
import com.employeeconnect.model.Meeting;
import com.employeeconnect.request.MeetingRequest;

@Service
public class MeetingService {
	@Autowired
	private MeetingDAO repo;
	
	@Autowired
	private EmployeeDAO empRepo;
	
	public ResponseEntity<Meeting> newMeet(MeetingRequest req) throws Exception{
		Meeting meeting = new Meeting();
		Employee employee = empRepo.findByEmail(req.getEmployee()).orElseThrow(()->new Exception("USER NOT FOUND"));
		Employee hr = empRepo.findByEmail(req.getHr()).orElseThrow(()->new Exception("USER NOT FOUND"));
		
		meeting.setHr(hr);
		meeting.setEmployee(employee);
		meeting.setLink(req.getLink());
		meeting.setDate(req.getDate());
		meeting.setTime(req.getTime());
		Meeting created = repo.save(meeting);
		return new ResponseEntity<Meeting>(created, HttpStatus.CREATED);
		
	}
	
	public ResponseEntity<List<Meeting>> getMeetOfHrByStatus(String mail,int status){
		return new ResponseEntity<List<Meeting>>(repo.findByStatusAndHrEmail(status,mail),HttpStatus.OK);
	}
	public ResponseEntity<List<Meeting>> getMeetOfEmployeeByStatus(String mail,int status){
		return new ResponseEntity<List<Meeting>>(repo.findByStatusAndEmployeeEmail(status,mail),HttpStatus.OK);
	}
	
	public ResponseEntity<Meeting> findById(Long id){
		return new ResponseEntity<Meeting>(repo.findById(id).orElse(null),HttpStatus.OK);
	}
	
	public ResponseEntity<Meeting> updateStatus(Long id, int status){
		Meeting meeting = findById(id).getBody();
		if(meeting==null)return null;
		meeting.setStatus(status);
		Meeting created = repo.save(meeting);
		return new ResponseEntity<Meeting>(created, HttpStatus.CREATED);
		
	}
	
	public ResponseEntity<Meeting> updateMeetComplete(Long id, MeetingRequest req){
		Meeting meeting = findById(id).getBody();
		if(meeting==null)return null;
		meeting.setStatus(1);
		meeting.setRagStatus(req.getRagStatus());
		meeting.setRagRemarks(req.getRagRemarks());
		meeting.setHrNotes(req.getHrNotes());
		Meeting created = repo.save(meeting);
		return new ResponseEntity<Meeting>(created, HttpStatus.CREATED);
	}
	
	public ResponseEntity<Meeting> updateRemarks(Long id, MeetingRequest req){
		Meeting meeting = findById(id).getBody();
		if(meeting==null)return null;
		meeting.setEmpRemarks(req.getEmpRemarks());
		Meeting created = repo.save(meeting);
		return new ResponseEntity<Meeting>(created, HttpStatus.CREATED);
	}
	
	public List<Meeting> quater1(List<Meeting> meeting){
		List<Meeting> out = new ArrayList<>();
		for(Meeting x:meeting) {
			if(x.getDate().getMonthValue()<=3) {
				out.add(x);
			}
		}
		return out;
	}
	public List<Meeting> quater2(List<Meeting> meeting){
		List<Meeting> out = new ArrayList<>();
		for(Meeting x:meeting) {
			if(x.getDate().getMonthValue()>3 && x.getDate().getMonthValue()<=6) {
				out.add(x);
			}
		}
		return out;
			
	}
	public List<Meeting> quater3(List<Meeting> meeting){
		List<Meeting> out = new ArrayList<>();
		for(Meeting x:meeting) {
			if(x.getDate().getMonthValue()>6 && x.getDate().getMonthValue()<=9) {
				out.add(x);
			}
		}
		return out;
		
	}
	public List<Meeting> quater4(List<Meeting> meeting){
		List<Meeting> out = new ArrayList<>();
		for(Meeting x:meeting) {
			if(x.getDate().getMonthValue()>9 && x.getDate().getMonthValue()<=12) {
				out.add(x);
			}
		}
		return out;
		
	}
	
	public ResponseEntity<List<Meeting>> getMeetByQuater(String mail, int quater){
		List<Meeting> meeting = repo.findByEmployeeManagerEmail(mail);
		List<Meeting> out = new ArrayList<>();
		if(quater==1) {
			out = quater1(meeting);
		}else if(quater==2) {
			out = quater2(meeting);
		}else if(quater==3) {
			out = quater3(meeting);
		}else if(quater==4) {
			out = quater4(meeting);
		}
		return new ResponseEntity<List<Meeting>>(out, HttpStatus.OK);
	}
	
	
	public ResponseEntity<List<Meeting>> getMeetByQuaterBu(Long id, int quater){
		List<Meeting> meeting = repo.findByEmployeeBuId(id);
		List<Meeting> out = new ArrayList<>();
		if(quater==1) {
			out = quater1(meeting);
		}else if(quater==2) {
			out = quater2(meeting);
		}else if(quater==3) {
			out = quater3(meeting);
		}else if(quater==4) {
			out = quater4(meeting);
		}
		return new ResponseEntity<List<Meeting>>(out, HttpStatus.OK);
	}
	
}
