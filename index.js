// Importing Employee classes 
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//import inquirer package to gather command line info
const require = ('inquirer')
// require fs(file system) to generate html
const fs= require('fs')
//generate html file path?
const generatehtmlfilepath = './dist/employeeProfile.html'


const employee = [];

function initApp() {
    startHtml();
    addTeamMember();
    //declaring my list of gathered info
}
function addTeamMember() {
    inquirer.prompt([{
        
        type: "input",
        message: "Enter Manager's name",
        name: "ManagerName"
    },
    
        {
            type: "list",
            message: "Select team member's role",
            choices: [
                "Engineer",
                "Intern",
                "Exit"

            ],
        },
        {   type: "input",
            message: "Enter team member's id",
            name: "id"
        },
        {    type: "input",
            message: "Enter team member's email address",
            name: "email"
        }
        .then(answers => {
            const htmlcontent= generatehtmlfilepath(answers)      }),
    ])

    } 