const Employee = require("./Employee");

/**
 * Class constructer for manager. 
 * @extends {Employee}
 * @param {string} name The manager's name
 * @param {string} id The manager's id number
 * @param {string} email The manager's email
 * @param {number} officeNumber The manager's office number
 */
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    /**
     * Getter for the manager's office number
     * @returns {number} The manager's office number
     */
    getOfficeNumber () {
        return this.officeNumber;
    }

    /**
     * Overrides the getRole funciton from the previous class
     * @returns {string} the role of the Manager
     */
    getRole () {
        return "Manager";
    }
}
module.exports = Manager;