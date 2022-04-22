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

module.exports = Prompter;