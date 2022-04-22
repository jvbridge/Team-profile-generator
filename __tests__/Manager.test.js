const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe('Manager', () => {
    
    const name = "John Doe";
    const id = "NCC-1701-D";
    const email = "JohnDoe@example.com";
    const officeNumber = 429;
    const man = new Manager(name, id, email, officeNumber);
    
    // Manager should pass all the tests employee did
    it("should have a name, id, and email strings", ()=>{
        expect(typeof man.name).toEqual("string");
        expect(typeof man.id).toEqual("string");
        expect(typeof man.email).toEqual("string");
    });

    describe('getName', () =>{
        it ("should return the name of the manager", () =>{
            expect(man.getName()).toEqual(name);
        });
    });

    describe('getId', () =>{
        it ("should return the id of the manager", () =>{
            expect(man.getId()).toEqual(id);
        });
    });
    
    describe('getEmail', () =>{
        it ("should return the email of the manager", () =>{
            expect(man.getEmail()).toEqual(email);
        });
    });

    // Manager should also get the office number and have the new role
    describe('getOfficeNumber', () =>{
        it ("should return the office number of the manager", () =>{
            expect(man.getOfficeNumber()).toEqual(officeNumber);
        });
    });

    describe('getRole', () =>{
        it ("should return the role of the manager", () =>{
            expect(man.getRole()).toEqual("Manager");
        });
    });
});