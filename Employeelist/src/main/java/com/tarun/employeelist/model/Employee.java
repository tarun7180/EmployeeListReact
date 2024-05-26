package com.tarun.employeelist.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "employee")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "emp_name")
	private String empName;
	
	@Column(name = "emp_email")
	private String empEmail;
	
	@Column(name = "emp_department")
	private String empDepartment;
	
	@Column(name = "emp_dob")
	private String empDob;
	
	@Column(name = "emp_doj")
	private String empDoj;
	
	@Column(name = "emp_city")
	private String empCity ;

	public Employee() {
		super();
	}

	public Employee(Long id, String empName, String empEmail, String empDepartment, String empDob, String empDoj,
			String empCity) {
		super();
		this.id = id;
		this.empName = empName;
		this.empEmail = empEmail;
		this.empDepartment = empDepartment;
		this.empDob = empDob;
		this.empDoj = empDoj;
		this.empCity = empCity;
	}

	public Employee(String empName, String empEmail, String empDepartment, String empDob, String empDoj, String empCity) {
		super();
		this.empName = empName;
		this.empEmail = empEmail;
		this.empDepartment = empDepartment;
		this.empDob = empDob;
		this.empDoj = empDoj;
		this.empCity = empCity;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmpEmail() {
		return empEmail;
	}

	public void setEmpEmail(String empEmail) {
		this.empEmail = empEmail;
	}

	public String getEmpDepartment() {
		return empDepartment;
	}

	public void setEmpDepartment(String empDepartment) {
		this.empDepartment = empDepartment;
	}

	public String getEmpDob() {
		return empDob;
	}

	public void setEmpDob(String empDob) {
		this.empDob = empDob;
	}

	public String getEmpDoj() {
		return empDoj;
	}

	public void setEmpDoj(String empDoj) {
		this.empDoj = empDoj;
	}

	public String getEmpCity() {
		return empCity;
	}

	public void setEmpCity(String empCity) {
		this.empCity = empCity;
	}
}
