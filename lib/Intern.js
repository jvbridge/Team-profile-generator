const Employee = require("./Employee");

function Intern (name, id, email, school){ 
    Employee.call(this, name, id, email);
    this.school = school;
}

// Inherit from Employee
Intern.prototype = Object.create(Employee.prototype);

/**
 * Getter for the intern's school
 * @returns {string} the intern's school
 */
Intern.prototype.getSchool = function () {
    return this.school;
};

Intern.prototype.getRole = function () {
    return "Intern";
};

module.exports = Intern;