package com.employeeconnect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import com.employeeconnect.dao.EmployeeDAO;
@SpringBootApplication
@EnableJpaRepositories(basePackageClasses=EmployeeDAO.class)
public class EmployeeConnectApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeConnectApplication.class, args);
	}

}
