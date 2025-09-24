package com.employeeconnect.request;

import java.time.LocalDate;
import java.time.LocalTime;

public class MeetingRequest {
	private Long id;
	private String hrNotes="";
	private String empRemarks="";
	private int ragStatus;
	private String ragRemarks;
	private String time;
	private String date;
	private String link;
	private String employee;
	private String hr;
	
private int status;
	
	
	
	
	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}
	
	public MeetingRequest() {}

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
		String[] arr = this.time.split(":");
		int hours = Integer.parseInt(arr[0]);
		int minutes = Integer.parseInt(arr[1]);
		return LocalTime.of(hours, minutes);
	}

	public void setTime(String time) {
		this.time = time;
	}

	public LocalDate getDate() {
		String[] arr = this.date.split("-");
		int year = Integer.parseInt(arr[0]);
		int month = Integer.parseInt(arr[1]);
		int date = Integer.parseInt(arr[2]);
		return LocalDate.of(year, month, date);
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getEmployee() {
		return employee;
	}

	public void setEmployee(String employee) {
		this.employee = employee;
	}

	public String getHr() {
		return hr;
	}

	public void setHr(String hr) {
		this.hr = hr;
	}
	
	
	

}
