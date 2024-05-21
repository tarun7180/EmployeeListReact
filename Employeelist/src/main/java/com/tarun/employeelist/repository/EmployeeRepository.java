package com.tarun.employeelist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tarun.employeelist.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
