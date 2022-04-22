/**
 * Employee class constructor
 * @param {string} name - the name for the employee
 * @param {string} id - a string for their ID number,
 * @param {string} email - the email address of an employee
 */
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    /**
     * Returns the employee's Name
     * @returns {string}
     */
    getName() {
        return this.name;
    }

    /**
     * Returns the employee's id
     * @returns {string} 
     */
    getId() {
        return this.id;
    }

    /**
     * Returns the employee's email
     * @returns {string}
     */
    getEmail() {
        return this.email;
    }

    /**
     * Returns the role of the Employee class
     * @returns {string}
     */
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;