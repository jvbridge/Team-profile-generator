// node module imports
const fs = require("fs");
const Inquirer = require("inquirer");

// class imports
const Prompter = require("./lib/Prompter");
const Generator = require("./lib/Generator");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


// constants
const FILE_PATH = "./dist/team-profile.html";

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
    // make instances of our classes
    let prompt = new Prompter();
    let gen = new Generator();

    // ask the user for details on the employees
    prompt.init().then(() => {
        // after all the asking is done generate the employees
        console.log("Generating employees...");
        const write = gen.generate(prompt.getEmployees());
        fs.writeFileSync(FILE_PATH, write);
        console.log("Successfully wrote to: ", FILE_PATH);
    });
    
}


main(process.argv);
