package com.employeeconnect.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeeconnect.model.Meeting;

public interface MeetingDAO extends JpaRepository<Meeting,Long>{
	List<Meeting> findByStatusAndHrEmail(int status,String mail);
	List<Meeting> findByStatusAndEmployeeEmail(int status,String mail);
	List<Meeting> findByEmployeeManagerEmail(String mail);
	List<Meeting> findByEmployeeBuId(Long id);

}
