const cTable = require("console.table")
const inquirer = require("inquirer")
const mysql = require("mysql2")
const { initialQuestion, departmentQuestion, roleQuestions, employeeQuestions, updateQuestions } = require("../questions/questions")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "company",
  password: "A9`5(]Ddr^7zQ^7)"
})

function choicesLoop(sqlStr, choices, role) {
    connection.promise().query(`SELECT * FROM roles`)
    .then(data => {
      console.log(data)
      let table = data[0]
      
      if(!role) { 
        for(var i = 0; i < table.length; i++) {
          choices.push({name: table.first_name + " " + last_name, value: table.id})
        }
      } else {
          for(var i = 0; i < table.length; i++) {
            choices.push({name: table.title, value: table.id})
          }
      }
    })
}
  
function displayDepartments() {
  connection.query(`SELECT * from departments`, (err, data => {
    console.table(data)
    init()
  }))
}
  
function displayRoles() {
    connection.query(`SELECT roles.id, roles.title, roles.salary, departments.name AS department
      FROM roles
      LEFT JOIN department 
      ON roles.department_id = departments.id;`, (err, data) => {
        console.table(data)
      })
}

function displayEmployees() {
  connection.query(`SELECT employees.id, employees.first_name AS firstName, employees.last_name AS lastName, employees.manager_id AS manager, roles.title AS role, roles.salary AS salary, departments.name AS department
  JOIN roles
  ON employees.role_id = roles.id 
  JOIN department
  ON rols.department_id = departments.id;`, (err, data) => {
    console.table(data)
    init()
  })
}
  
function addDepartment() {
}
  
function addRole() {
    
}

function addEmployee() {
  choicesLoop("SELECT * FROM roles", employeeQuestions[2].choices, true)
  // choicesLoop(`SELECT first_name, last_name, id FROM employees`, employeeQuestions[2].choices, false)
  
  inquirer.prompt(employeeQuestions)
  .then (answer => {
    connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES ("${answer.newEmployeeFirstName}", "${answer.newEmployeeLastName}", ${answer.newEmployeRole}, ${answer.newEmployeeManager});`, (err, data) => {
        console.table(data)
        promptQuestions()
    })
  })
}


function updateEmployee() {

}

function quit() {
  
}

module.exports = { displayDepartments, displayRoles, displayEmployees, addDepartment, addRole, addEmployee, updateEmployee, quit}