const Prompter = require("../lib/Prompter");
const Inquirer = require("inquirer");

// sub classes we are
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");

jest.mock("inquirer");


describe ("Prompter", () => {

    describe("prompt employee", () =>{
        it ("should prompt the user which kind of employee they want", () => {
            const prompt = new Prompter();
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
            const prompt = new Prompter();
            const currLen = prompt.employees.length;
            const answers = {
                name: "John Doe", 
                id:"429", 
                email:"JohnDoe@example.com", 
                officeNumber: 429,
                anotherEmp :false
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
            const prompt = new Prompter();
            const currLen = prompt.employees.length;
            const answers = {
                name: "John Doe", 
                id:"429", 
                email:"JohnDoe@example.com", 
                github: "octocat",
                anotherEmp :false
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
            const prompt = new Prompter();
            const currLen = prompt.employees.length;
            const answers = {
                name: "John Doe", 
                id:"429", 
                email:"JohnDoe@example.com", 
                school: "UC Berkeley",
                anotherEmp :false
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

    // describe("ask again", () => {
    //     it ("should prompt the user to make another employee if they said yes", () => {
    //         const prompt = new Prompter();
    //         Inquirer.prompt.mockReturnValue({anotherEmp: true});
    //         expect(prompt.askAgain().then(()=>{

    //         }));
    //     });
    // });

    describe("Init", () => {
        it ("should start by prompting the user to make a manager", () => {
            const answers = {
                name: "John Doe", 
                id:"429", 
                email:"JohnDoe@example.com", 
                officeNumber: 429,
                anotherEmp :false
            };

            Inquirer.prompt.mockReturnValue(new Promise((resolve)=>{return answers;}));
            const prompt = new Prompter();
            
            prompt.init().then(() => {
                expect(prompt.employees.length).toEqual(1);
                expect(prompt.employees[0] instanceof Manager).toEqual(true);
            });
            
        });

    });
});