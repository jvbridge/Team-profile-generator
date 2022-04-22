const Inquirer = require("inquirer");

// require the employee classes
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

/**
 * An interface for handling inquirer. 
 */
function Prompter() {
    this.employees = [];
}

/**
 * Add an employee to the list of employees we are rendering
 * @param {Employee} employee the employee you want to add to the promter
 * @returns 
 */
Prompter.prototype.addEmployee = (employee) => {this.employees.push(employee);};

/**
 * Getter for our employees 
 * @returns {Employee[]}
 */
Prompter.prototype.getEmployees = () => {return this.employees;};

/**
 * Creates a prompt for the user to enter information for a new employee
 */
Prompter.prototype.askEmployee = () => {
    Inquirer.prompt({
        "name": "role",
        "type": "list",
        "message": "What kind of employee are we adding?",
        "choices": ["Manager", "Engineer", "Intern"]
    }).then((answer)=>{
        
    });
};

Prompter.prototype.askManager = function(){
    return Inquirer.prompt([
        {
            "name": "name",
            "type": "input",
            "message": "What is this manager's name?"
        }, 
        {
            "name": "id",
            "type": "input",
            "message": "What is their ID number?"
        },
        {
            "name": "email",
            "type": "input",
            "message": "what is their email address?"
        },
        {
            "name":"officeNumber",
            "type": "number",
            "message":"what is their office number?"
        }
    ]).then((answers)=>{
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        this.employees.push(manager);
    });
};

module.exports = Prompter;