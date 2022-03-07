// Load Node Packages
const path = require("path");
const fs = require("fs");
const inquirer = require('inquirer');
// Load classes
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { log } = require("console");
// Write site variables
const OUTPUT_DIR = path.resolve(__dirname,'../dist');
const teamSite = path.join(OUTPUT_DIR, 'my_team.html');
const teamData = require('./siteMaker')
const teamMembers = [];

class myTeam{
    constructor(){
    };
    
employeeRole() {
        inquirer
            .prompt([{
                type: "list",
                message: 'Please assign a role to the new Team Member',
                name: 'newRole',
                choices: [
                    {
                        name: 'intern',
                        value: 'intern'
                    },
                    {
                        name: 'engineer',
                        value: 'engineer'
                    },
                    {
                        name: 'manager',
                        value: 'manager'
                    }
                ],
                default: 0
            }]).then(val => {
                if (val.newRole === 'manager'){
                    console.log("Please add the following details to the new manager:");
                    this.newManager();
                }else if (val.newRole === 'engineer'){
                    console.log("Please add the following details to the new engineer:");
                    this.newEngineer();
                }else {
                    console.log("Please add the following details to the new intern:");
                    this.newIntern();
                };
            })      
    };
    newManager(){
            inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the name of the team manager?"
            },
            {
                type: "input",
                name: "id",
                message: "Team Manager's ID number:"
            },
            {
                type: "input",
                name: "email",
                message: "Team Manager's email address:"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Team Manager's office number:"
            }
        ]).then(val => {
            const manager = new Manager(val.name, val.id, val.email, val.officeNumber);
            console.log(manager)
            teamMembers.push(new Manager(val.name, val.id, val.email, val.officeNumber));
            this.addTeamMember();

        })
    }
    newEngineer() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Engineer's name?"
            },
            {
                type: "input",
                name: "id",
                message: "Engineer's ID number:"
            },
            {
                type: "input",
                name: "email",
                message: "Engineer's email address:"
            },
            {
                type: "input",
                name: "github",
                message: "What is the URL of the Engineer's GitHub profile?"
            }
        ]).then(val => {
            const engineer = new Engineer(val.name, val.id, val.email, val.github);
            console.log(engineer);
            teamMembers.push(new Engineer(val.name, val.id, val.email, val.github));
            this.addTeamMember();
        })
    }
    newIntern() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Intern's name?"
            },
            {
                type: "input",
                name: "id",
                message: "Intern's ID number:"
            },
            {
                type: "input",
                name: "email",
                message: "Intern's email address:"
            },
            {
                type: "input",
                name: "school",
                message: "Which school is the intern from?"
            }
        ]).then(val => {
            const intern = new Intern(val.name, val.id, val.email, val.school);
            teamMembers.push(new Intern(val.name, val.id, val.email, val.school));
            this.addTeamMember();
        })
    };
    addTeamMember(){
        inquirer
            .prompt([{
                type: "list",
                message: 'Add another member to your team?',
                name: 'moreMembers',
                choices: [
                    {
                        name: 'Yes',
                        value: 'yes'
                    },
                    {
                        name: 'No',
                        value: 'no'
                    }
                ],
                default: 0
            }]).then(val =>{
                if (val.moreMembers === 'yes'){
                    console.log(teamMembers);
                    this.employeeRole()
                }else{
                    console.log(teamMembers);
                    this.createSite()
                }
            })
    }
    createSite() {
        console.log(teamMembers + "create site");
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(teamSite, teamData(teamMembers), "UTF-8");
    }
}
module.exports = myTeam;


