create schema employeelist;

CREATE TABLE employeelist.employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  emp_name VARCHAR(45) NOT NULL,
  emp_email VARCHAR(45) NOT NULL,
  emp_department VARCHAR(45) NOT NULL,
  emp_dob date Not Null,
  emp_doj date not null,
  emp_city varchar(45) not null);
  
INSERT INTO employeelist.employee (emp_name,emp_email,emp_department,emp_dob,emp_doj,emp_city) VALUES ("employee1","employee1@test.com","department1",'1980-01-01','2015-01-09',"city1");
INSERT INTO employeelist.employee (emp_name,emp_email,emp_department,emp_dob,emp_doj,emp_city) VALUES ("employee2","employee2@test.com","department1",'1982-02-01','2015-01-09',"city2");
INSERT INTO employeelist.employee (emp_name,emp_email,emp_department,emp_dob,emp_doj,emp_city) VALUES ("employee3","employee3@test.com","department1",'1985-03-01','2015-01-09',"city3");
INSERT INTO employeelist.employee (emp_name,emp_email,emp_department,emp_dob,emp_doj,emp_city) VALUES ("employee4","employee4@test.com","department1",'1981-04-01','2015-01-09',"city4");
INSERT INTO employeelist.employee (emp_name,emp_email,emp_department,emp_dob,emp_doj,emp_city) VALUES ("employee5","employee5@test.com","department1",'1987-05-01','2015-01-09',"city5");
INSERT INTO employeelist.employee (emp_name,emp_email,emp_department,emp_dob,emp_doj,emp_city) VALUES ("employee6","employee6@test.com","department2",'1983-06-01','2015-01-09',"city6");
INSERT INTO employeelist.employee (emp_name,emp_email,emp_department,emp_dob,emp_doj,emp_city) VALUES ("employee7","employee7@test.com","department2",'1989-07-01','2015-01-09',"city7");
INSERT INTO employeelist.employee (emp_name,emp_email,emp_department,emp_dob,emp_doj,emp_city) VALUES ("employee8","employee8@test.com","department2",'1981-08-01','2015-01-09',"city8");
INSERT INTO employeelist.employee (emp_name,emp_email,emp_department,emp_dob,emp_doj,emp_city) VALUES ("employee9","employee9@test.com","department2",'1985-09-01','2015-01-09',"city9");
INSERT INTO employeelist.employee (emp_name,emp_email,emp_department,emp_dob,emp_doj,emp_city) VALUES ("employee10","employee10@test.com","department2",'1990-10-01','2015-01-09',"city10");