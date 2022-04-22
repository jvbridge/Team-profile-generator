const Employee = require("../lib/Employee");

describe('Employee', () =>{
    
    it("should have a name, id, and email strings", ()=>{
        const emp = new Employee("john Doe", "0x2fba", "JohnDoe@example.com");
        expect(typeof emp.name).toEqual("string");
        expect(typeof emp.id).toEqual("string");
        expect(typeof emp.email).toEqual("string");
    });

});