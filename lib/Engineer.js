const Employee = require("./Employee");

/**
 * Class constructor for Engineer
 * @extends {Employee}
 * @param {string} name - the engineer's name
 * @param {string} id - the engineer's id
 * @param {string} email - the engineer's email
 * @param {string} github - the engineer's github
 */
function Engineer(name, id, email, github){
    Employee.call(this, name, id, email);
    this.github = github;
}

// Inherit from employee
Engineer.prototype = Object.create(Employee.prototype);

/**
 * Return's the engineer's role
 * @returns {string}
 */
Engineer.prototype.getRole = function () {
    return "Engineer";
};

/**
 * Return's the engineer's github user name
 * @returns {string}
 */
Engineer.prototype.getGithub = function () {
    return this.github;
};

module.exports = Engineer;