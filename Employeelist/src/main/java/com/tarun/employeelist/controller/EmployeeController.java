package com.tarun.employeelist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tarun.employeelist.model.Employee;
import com.tarun.employeelist.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@SpringBootApplication
@RestController
@RequestMapping(value = "/employee", consumes = "application/json", produces = "application/json")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping(path = "/")
	public List<Employee> getAllEmployees(){
		return employeeService.getEmployeeList();
	}
}
