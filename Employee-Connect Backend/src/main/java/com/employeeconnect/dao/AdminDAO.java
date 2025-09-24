package com.employeeconnect.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employeeconnect.model.Admin;

@Repository
public interface AdminDAO extends JpaRepository<Admin, Long>{

}
