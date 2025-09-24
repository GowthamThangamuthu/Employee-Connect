package com.employeeconnect.model;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Meeting {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	private String hrNotes="";
	private String empRemarks="";
	private int ragStatus;
	private String ragRemarks;
	private LocalTime time;
	private LocalDate date;
	private String link;
	private int status=0;
	
	
	
	
	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}


	@ManyToOne
	@JoinColumn(name = "employee_id", referencedColumnName = "id")
	private Employee employee;
	
	@ManyToOne
	@JoinColumn(name = "hr_id", referencedColumnName = "id")
	private Employee hr;
	
	
	public Meeting() {}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getHrNotes() {
		return hrNotes;
	}


	public void setHrNotes(String hrNotes) {
		this.hrNotes = hrNotes;
	}


	public String getEmpRemarks() {
		return empRemarks;
	}


	public void setEmpRemarks(String empRemarks) {
		this.empRemarks = empRemarks;
	}


	public int getRagStatus() {
		return ragStatus;
	}


	public void setRagStatus(int ragStatus) {
		this.ragStatus = ragStatus;
	}


	public String getRagRemarks() {
		return ragRemarks;
	}


	public void setRagRemarks(String ragRemarks) {
		this.ragRemarks = ragRemarks;
	}


	public LocalTime getTime() {
		return time;
	}


	public void setTime(LocalTime time) {
		this.time = time;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public String getLink() {
		return link;
	}


	public void setLink(String link) {
		this.link = link;
	}


	public Employee getEmployee() {
		return employee;
	}


	public void setEmployee(Employee employee) {
		this.employee = employee;
	}


	public Employee getHr() {
		return hr;
	}


	public void setHr(Employee hr) {
		this.hr = hr;
	}
	
	
	
	
	
	

}
