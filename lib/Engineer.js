const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, gitHub){
        super(name, id, email);
        this.github = gitHub;
        this.role = 'Engineer';
    };
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;