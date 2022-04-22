const Prompter = require("../lib/Prompter");
const Inquirer = require("inquirer");
const Manager = require("../lib/Manager");

jest.mock("inquirer");


describe ("Prompter", () => {
    const prompt = new Prompter();
    
    

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
});