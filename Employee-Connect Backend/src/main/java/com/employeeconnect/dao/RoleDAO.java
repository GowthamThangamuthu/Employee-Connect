package com.employeeconnect.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employeeconnect.model.Role;

@Repository
public interface RoleDAO extends JpaRepository<Role,Long> {

}
