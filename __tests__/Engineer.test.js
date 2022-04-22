const Engineer = require("../lib/Engineer");

describe('Engineer', () =>{
    
    it("should have a github username sting", ()=>{
        const eng = new Engineer("john Doe", "0x2fba", "JohnDoe@example.com", "octocat");
        expect(typeof eng.github).toEqual("string");

    });

});