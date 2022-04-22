const Intern = require("../lib/Intern");

describe('Intern', () =>{
    const name = "John Doe";
    const id = "NCC-1701-D";
    const email = "JohnDoe@example.com";
    const school = "Starfleet Acadmey";
    const intern = new Intern(name, id, email, school);
    
    // Intern should pass all the tests employee did
    it("should have a name, id, and email strings", ()=>{
        expect(typeof intern.name).toEqual("string");
        expect(typeof intern.id).toEqual("string");
        expect(typeof intern.email).toEqual("string");
    });

    describe('getName', () =>{
        it ("should return the name of the engineer", () =>{
            expect(intern.getName()).toEqual(name);
        });
    });

    describe('getId', () =>{
        it ("should return the id of the engineer", () =>{
            expect(intern.getId()).toEqual(id);
        });
    });
    
    describe('getEmail', () =>{
        it ("should return the email of the engineer", () =>{
            expect(intern.getEmail()).toEqual(email);
        });
    });

    // Intern should also get the school and have the new role
    describe('getSchool', () =>{
        it ("should return the school of the intern", () =>{
            expect(intern.getSchool()).toEqual(school);
        });
    });

    describe('getRole', () =>{
        it ("should return the role of the intern", () =>{
            expect(intern.getRole()).toEqual("Intern");
        });
    });

});