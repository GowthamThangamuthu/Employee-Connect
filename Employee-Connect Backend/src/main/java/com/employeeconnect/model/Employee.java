package com.employeeconnect.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	private String name;
	private String email;
	
	
	
	

	private boolean active=true;
	
	@ManyToOne
	@JoinColumn(name= "role", referencedColumnName="id")
	private Role role;
	
	@ManyToOne
	@JoinColumn(name = "manager_id", referencedColumnName = "id")
	private Employee manager;
	
	@ManyToOne
	@JoinColumn(name = "bu_id", referencedColumnName = "id")
	private BU bu;
	
	public BU getBu() {
		return bu;
	}

	public void setBu(BU bu) {
		this.bu = bu;
	}

	public Employee() {}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Employee getManager() {
		return manager;
	}

	public void setManager(Employee manager) {
		this.manager = manager;
	}

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

	
	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	
	

}
