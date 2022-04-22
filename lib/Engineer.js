const Employee = require("./Employee");

function Engineer(name, id, email, github){
    Employee.call(this, name, id, email);
    this.github = github;
}

module.exports = Engineer;