/**
 * Employee class constructor
 * @param {string} name - the name for the employee
 * @param {string} id - a string for their ID number,
 * @param {string} email - the email address of an employee
 */
 function Employee(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
}

/**
 * Returns the employee's Name
 * @returns {string}
 */
Employee.prototype.getName = function () {
    return this.name;
};

Employee.prototype.getId = function () {
    return this.id;
};

Employee.prototype.getEmail = function () {
    return this.email;
};

Employee.prototype.getRole = function () {
    return "Employee";
};

module.exports = Employee;