const inquirer = require("inquirer")
const { initialQuestion, departmentQuestion, roleQuestions, employeeQuestions, updateQuestions } = require("./questions/questions")
const { displayDepartments, displayRoles, displayEmployees, addDepartment, addRole, addEmployee, updateEmployee, quit } = require("./utils/showResponse")

function init() {
    inquirer.prompt(initialQuestion)
    .then(answer => {
      answer = answer.initialInput;
      switch (answer) {
        case "View All Employees":
          displayEmployees()
          break;
        case "Add Employees": 
          addEmployee()
          break;
        case "Update Employee Role":
          updateEmployee
          break;
        case "View All Roles":
          displayRoles()
          break;
        case "Add Role":
          addRole()
          break;
        case "View All Departments": 
          displayDepartments()
          break;
        case "Add Department":
          addDepartment()
          break;
        case "Quit": 
          quit()
        return
    }
  })
  .catch(err => {
    console.error(err)
  })
}
  
init()
  