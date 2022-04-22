const Employee = require("../lib/Employee");

describe('Employee', () => {
    
    it("should have a name, id, and email strings", ()=>{
        const emp = new Employee("john Doe", "0x2fba", "JohnDoe@example.com");
        expect(typeof emp.name).toEqual("string");
        expect(typeof emp.id).toEqual("string");
        expect(typeof emp.email).toEqual("string");
    });

    describe('getName', () =>{
        it ("should return the name of the employee", () =>{
            const name = "john doe";
            const emp = new Employee(name, "0x2fba", "JohnDoe@example.com");
            expect(emp.getName()).toEqual(name);
        });
    });

    describe('getId', () =>{
        it ("should return the id of the employee", () =>{
            const id = "0x2fba";
            const emp = new Employee("john doe", id, "JohnDoe@example.com");
            expect(emp.getId()).toEqual(id);
        });
    });
    
    describe('getEmail', () =>{
        it ("should return the email of the employee", () =>{
            const email = "JohnDoe@example.com";
            const emp = new Employee("john doe", "0x2fba", email);
            expect(emp.getEmail()).toEqual(email);
        });
    });

    describe('getRole', () =>{
        it ("should return the role of the employee", () =>{
            const emp = new Employee("john doe", "0x2fba", "JohnDoe@example.com");
            expect(emp.getRole()).toEqual("Employee");
        });
    });
});