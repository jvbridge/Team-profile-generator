const Prompter = require("../lib/Prompter");

describe ("Prompter", () => {
    const prompt = new Prompter();
    
    describe("prompt employee", () => {
        it("should prompt the user to create a new employee", () => {
            const currEmployees = prompt.employees.length;
            prompt.askEmployee();
            expect(prompt.employees.length).isEqual(currEmployees + 1);
        });
    });
});