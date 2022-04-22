const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){ 
        super(name, id, email);
        this.school = school;
}
    /**
     * Getter for the intern's school
     * @returns {string} the intern's school
     */
    getSchool () {
        return this.school;
    }

    /**
     * Overrides the getRole function from the previous class
     * @returns {string} the role of the intner
     */
    getRole () {
        return "Intern";
    }
}
module.exports = Intern;