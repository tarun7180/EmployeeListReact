create schema employeelist;

CREATE TABLE employeelist.emplyee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  emp_name VARCHAR(45) NOT NULL,
  emp_email VARCHAR(45) NOT NULL,
  emp_department VARCHAR(45) NOT NULL,
  emp_dob date Not Null,
  emp_doj date not null,
  emp_dept varchar(45) not null,
  emp_city varchar(45) not null);