package com.employeeconnect.request;

public class AdminRequest {
	@Override
	public String toString() {
		return "AdminRequest [employee=" + employee + ", role=" + role + ", comments=" + comments + "]";
	}


	private String employee;
	private Long role;
	private String comments;
	
	
	
	
	public String getComments() {
		return comments;
	}


	public void setComments(String comments) {
		this.comments = comments;
	}


	public AdminRequest() {}


	public String getEmployee() {
		return employee;
	}


	public void setEmployee(String employee) {
		this.employee = employee;
	}


	public Long getRole() {
		return role;
	}


	public void setRole(Long role) {
		this.role = role;
	}
	
	
}
