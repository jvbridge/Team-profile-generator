const Employee = require("./Employee");

/**
 * Class constructor for Engineer
 * @extends {Employee}
 * @param {string} name - the engineer's name
 * @param {string} id - the engineer's id
 * @param {string} email - the engineer's email
 * @param {string} github - the engineer's github
 */
class Engineer extends Employee{ 
    constructor (name, id, email, github){
        super(name,id,email);
        this.github = github;
    }
    /**
     * Return's the engineer's role
     * @returns {string}
     */
    getRole() {
        return "Engineer";
    }

    /**
     * Return's the engineer's github user name
     * @returns {string}
     */
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;