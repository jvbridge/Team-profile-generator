const Employee = require("./Employee");

/**
 * Class constructer for manager. 
 * @extends {Employee}
 * @param {string} name The manager's name
 * @param {string} id The manager's id number
 * @param {string} email The manager's email
 * @param {number} officeNumber The manager's office number
 */
function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber;
}

// Inherit from Employee
Manager.prototype = Object.create(Employee.prototype);

/**
 * Getter for the manager's office number
 * @returns {number} The manager's office number
 */
Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber;
};

/**
 * Overrides the getRole funciton from the previous class
 * @returns {string} the role of the Manager
 */
Manager.prototype.getRole = function () {
    return "Manager";
};

module.exports = Manager;