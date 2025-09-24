package com.employeeconnect.request;


public class EmployeeRequest {
	private Long id;
	private String empId;
	private String name;
	private String email;
	private Long role;
	private Long manager;
	private Long bu;
	
	
	
	public String getEmpId() {
		return empId;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public Long getBu() {
		return bu;
	}

	public void setBu(Long bu) {
		this.bu = bu;
	}

	public EmployeeRequest() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getRole() {
		return role;
	}

	public void setRole(Long role) {
		this.role = role;
	}

	public Long getManager() {
		return manager;
	}

	public void setManager(Long manager) {
		this.manager = manager;
	}

	@Override
	public String toString() {
		return "EmployeeRequest [name=" + name + ", email=" + email + "]";
	}
	
	
	
	
}
