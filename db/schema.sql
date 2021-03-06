DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;


CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT, 
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id) 
);


CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL NOT NULL, 
    department_id INT, 
    FOREIGN KEY (department_id) REFERENCES departments(id),
    PRIMARY KEY (id)
);


CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR (30) NOT NULL, 
    role_id INT NOT NULL,
    manager_id INT DEFAULT NULL, 
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id),
    PRIMARY KEY (id)
);