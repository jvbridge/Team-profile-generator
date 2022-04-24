const Inquirer = require("inquirer");

// require the employee classes
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

// Constants used by the class
const employeeQuestions = [
    { 
        "name": "name",
        "type": "input",
        "message": "What is their name?"
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
    }
];

/**
 * An interface for handling inquirer. 
 */
class Prompter {
    constructor(){
        this.employees = [];
    }

    /**
     * Add an employee to the list of employees we are rendering
     * @param {Employee} employee the employee you want to add to the promter
     * @returns 
     */
    addEmployee (employee) {
        this.employees.push(employee);
    }

    /**
     * Getter for our employees 
     * @returns {Employee[]}
     */
    getEmployees () {
        return this.employees;
    }

    /**
     * Creates a prompt for the user to enter information for a new employee
     * @async
     * @returns {promise} the inquirer prompt
     */
    async askEmployee () {
        // ask the user which one they want
        return Inquirer.prompt({
            "name": "role",
            "type": "list",
            "message": "What kind of employee are we adding?",
            "choices": ["Manager", "Engineer", "Intern"]
        }).then((answer)=>{
            
            let ret;
            switch(answer.role){
                case "Manager": 
                    return this.askManager().then(()=>{return this.askAgain();});
                case "Engineer": 
                    return this.askEngineer().then(()=>{return this.askAgain();});
                case "Intern": 
                    return this.askIntern().then(()=>{return this.askAgain();});
                default: throw `Invalid choice given to askEmployee: ${answer}`;
            }
        });
    }

    /** 
     * Asks the user prompts to make a manager, will return the promise for 
     * the inquirer prompt used
     * @async
     * @returns {promise}
     */
    async askManager (){
        return Inquirer.prompt([
            ...employeeQuestions,
            {
                "name":"officeNumber",
                "type": "number",
                "message":"what is their office number?"
            }
        ]).then((answers)=>{
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            this.addEmployee(manager);
        });
    }

    /**
     * Asks the user prompts to make an intern, will return the promise for 
     * the inquirer prompt
     * @async
     * @returns {promise}
     */
    async askEngineer (){
        return Inquirer.prompt([
            ...employeeQuestions,
            {
                "name":"github",
                "type": "input",
                "message":"What is their github username?"
            }
        ]).then((answers)=>{
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            this.addEmployee(engineer);
        });
    }
    
    /**
     * Asks the user prompts to make an intern, will return the promise for 
     * the inquirer prompt
     * @async
     * @returns {promise}
     */
    async askIntern(){
        return Inquirer.prompt([
            ...employeeQuestions,
            {
                "name":"school",
                "type": "input",
                "message":"What school do they attend?"
            }
        ]).then((answers)=>{
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            this.addEmployee(intern);
        });
    }

    /**
     * Initializes the employee cycle
     * @async
     */
    async init(){
        const intro = "Welcome to the Team profile generator! We will start by"+
        " creating a manager for the team!";
        console.log(intro);
        return this.askManager().then(() => {
            return this.askAgain();
        });
    }

    /**
     * Prompts the user if they want to ask for another employee
     * @async
     */
    async askAgain(){
        return Inquirer.prompt([{
            name: "anotherEmp",
            type: "confirm",
            message: "Would you like to add another employee?"
        }])
        .then((answer)=>{
            if (answer.anotherEmp){
                return this.askEmployee();
            }
            return false;
        });
    }

}
module.exports = Prompter;