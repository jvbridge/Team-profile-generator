const Engineer = require("../lib/Engineer");

describe('Engineer', () =>{
    const name = "John Doe";
    const id = "NCC-1701-D";
    const email = "JohnDoe@example.com";
    const github = "octocat";
    const eng = new Engineer(name, id, email, github);
    
    // Engineer should pass all the tests employee did
    it("should have a name, id, and email strings", ()=>{
        expect(typeof eng.name).toEqual("string");
        expect(typeof eng.id).toEqual("string");
        expect(typeof eng.email).toEqual("string");
    });

    describe('getName', () =>{
        it ("should return the name of the engineer", () =>{
            expect(eng.getName()).toEqual(name);
        });
    });

    describe('getId', () =>{
        it ("should return the id of the engineer", () =>{
            expect(eng.getId()).toEqual(id);
        });
    });
    
    describe('getEmail', () =>{
        it ("should return the email of the engineer", () =>{
            expect(eng.getEmail()).toEqual(email);
        });
    });

    // Engineer should also get the github and have the new role
    describe('getGithub', () =>{
        it ("should return the github username of the engineer", () =>{
            expect(eng.getGithub()).toEqual(github);
        });
    });

    describe('getRole', () =>{
        it ("should return the role of the engineer", () =>{
            expect(eng.getRole()).toEqual("Engineer");
        });
    });

});