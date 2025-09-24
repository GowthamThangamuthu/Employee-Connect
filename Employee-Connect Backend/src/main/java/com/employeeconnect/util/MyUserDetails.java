package com.employeeconnect.util;

import java.util.Collection;
import java.util.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.employeeconnect.model.Employee;
import com.employeeconnect.model.Role;

@SuppressWarnings("serial")
public class MyUserDetails implements UserDetails {
	
	private String name;
	private String mail;
	private boolean active;
	private List<GrantedAuthority> authority;
	
	
	public MyUserDetails() {}
	
	public MyUserDetails(Employee employee) {
		name = employee.getName();
		mail = employee.getEmail();
		active = employee.isActive();
		authority = new ArrayList<>();
		Role role = employee.getRole();
		GrantedAuthority grantedAuthority;
		if(role!=null) {
			grantedAuthority = new SimpleGrantedAuthority("ROLE_"+role.getRole());
			authority.add(grantedAuthority);
		}
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authority;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return "password";
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return mail;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return active;
	}
	
	

}
