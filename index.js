// node module imports
const fs = require("fs");
const Inquirer = require("inquirer");

// class imports
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// imported JSON files
const questions = require("./scr/questions.json");