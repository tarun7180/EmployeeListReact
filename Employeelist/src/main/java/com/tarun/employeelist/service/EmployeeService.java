package com.tarun.employeelist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tarun.employeelist.model.Employee;
import com.tarun.employeelist.repository.EmployeeRepository;

@Component
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	public List<Employee> getEmployeeList() {
		return employeeRepository.findAll();
	}
}
