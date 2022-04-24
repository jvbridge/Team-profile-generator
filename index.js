// node module imports
const fs = require("fs");
const Inquirer = require("inquirer");

// class imports
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Prompter = require("./lib/Prompter");

// imported JSON files

/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
 */


/**
 * This is the initial type of question that will be asked
 */
const questions = [
    {
        name: "Initializer",
        message: "Welcome to the team profile generator!",
        type: "input",
    }
];

function main(args){
    
    let prompt = new Prompter();
    prompt.init().then(() =>{
        // TODO: make generator go here
        console.log(prompt.employees);
    });
    
}


main(process.argv);
