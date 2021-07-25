const initialQuestion = [
    {
        type: "list",
        message: "What would you like to do",
        name: "initialQuestion",
        choices: ["View All Employees", "Add Employees", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"]
    }
]

const departmentQuestion = [
    {
        type: "Input",
        message: "Enter New Department Name:",
        name: "departmentName",
    }
]

const roleQuestions = [
    {
        type: "Input",
        message: "Enter New Role Name:",
        name: "roleName",
    },
    {
        type: "Input",
        message: "Enter New Role Salary",
        name: "roleSalary",
    },
    {
        type: "list",
        message: "Enter New Role's Department:",
        name: "roleDepartment",
        choices: []
    }
]

const employeeQuestions = [
    {
        type: "Input",
        message: "Enter New Employee First Name:",
        name: "employeeFirstName",
    },
    {
        type: "Input",
        message: "Enter New Employee Last Name:",
        name: "employeeLasttName",
    },
    {
        type: "list",
        message: "Enter New Employee's Role:",
        name: "employeeRole",
        choices: []
    },
    {
        type: "list",
        message: "Enter New Employee's Manager:",
        name: "employeeManager",
        choices: []
    }
]

module.exports = { initialQuestion, departmentQuestion, roleQuestions, employeeQuestions}