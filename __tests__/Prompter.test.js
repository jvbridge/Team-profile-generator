const Prompter = require("../lib/Prompter");
const Inquirer = require("inquirer");

// sub classes we are
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");

jest.mock("inquirer");


describe ("Prompter", () => {
    const prompt = new Prompter();

    describe("prompt employee", () =>{
        it ("should prompt the user which kind of employee they want", () => {
            const answer = 
            {
                role: "Manager",
                name: "John Doe", 
                id:"429", 
                email:"JohnDoe@example.com", 
                officeNumber: 429,
                github: "octocat",
                school: "UC Berkeley"
            };
            Inquirer.prompt.mockReturnValue(new Promise((resolve) => {
                return answer;
            }));
            prompt.askEmployee().then(() => {
                expect(prompt.employees.length).toEqual(currEmployees + 1);
                expect(prompt.employees[employees.length -1] instanceof Manager).toEqual(true);
            });

            answer.role = "Engineer";
            prompt.askEmployee().then(() => {
                expect(prompt.employees.length).toEqual(currEmployees + 1);
                expect(prompt.employees[employees.length -1] instanceof Engineer).toEqual(true);
            });

            answer.role = "Intern";
            prompt.askEmployee().then(() => {
                expect(prompt.employees.length).toEqual(currEmployees + 1);
                expect(prompt.employees[employees.length -1] instanceof Intern).toEqual(true);
            });
        });
    });

    describe("prompt manager", () => {
        it ("should prompt the user to create a new manager", async () => {
            const currLen = prompt.employees.length;
            const answers = {
                name: "John Doe", 
                id:"429", 
                email:"JohnDoe@example.com", 
                officeNumber: 429
            };
            // inquirer returns a promise 
            Inquirer.prompt.mockReturnValue(new Promise((resolve)=>{return answers;}));
            
            // after the promise resolves run the test
            prompt.askManager().then(() =>{
                expect(prompt.employees.length).toEqual(currLen + 1);
                expect(prompt.employees[currLen] instanceof Manager).toEqual(true);
            });
            
        });
    });

    describe("prompt engineer", () => {
        it ("should prompt the user to create a new engineer", async () => {
            const currLen = prompt.employees.length;
            const answers = {
                name: "John Doe", 
                id:"429", 
                email:"JohnDoe@example.com", 
                github: "octocat"
            };
            // inquirer returns a promise 
            Inquirer.prompt.mockReturnValue(new Promise((resolve)=>{return answers;}));
            
            // after the promise resolves run the test
            prompt.askEngineer().then(() =>{
                expect(prompt.employees.length).toEqual(currLen + 1);
                expect(prompt.employees[currLen] instanceof Engineer).toEqual(true);
            });
            
        });
    });

    describe("prompt intern", () => {
        it ("should prompt the user to create a new engineer", async () => {
            const currLen = prompt.employees.length;
            const answers = {
                name: "John Doe", 
                id:"429", 
                email:"JohnDoe@example.com", 
                school: "UC Berkeley"
            };
            // inquirer returns a promise 
            Inquirer.prompt.mockReturnValue(new Promise((resolve)=>{return answers;}));
            
            // after the promise resolves run the test
            prompt.askIntern().then(() =>{
                expect(prompt.employees.length).toEqual(currLen + 1);
                expect(prompt.employees[currLen] instanceof Intern).toEqual(true);
            });
            
        });
    });
});