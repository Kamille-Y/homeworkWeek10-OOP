//import inquirer package to gather command line info
const inquirer = require("inquirer");
// require fs(file system) to generate html
const fs= require('fs');
// Importing Employee classes 
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")
//generate html file path?
const path = require('path');
const render = require("./src/Employee-template.js");
// const fs = fs.writeFileSync

//Global array of objects that hold team members teamMem memberArray
const employeeTeam = [];
const memberIDArray = [];



function appChoices() {

    function createManager() {
      console.log("Let's build your team!");
      inquirer.prompt([
        {
          type: "input",
          name: "managerName",
          message: "Team manager's name?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Enter at least one character.";
          }
        },
        {
          type: "input",
          name: "managerId",
          message: "Enter manager's id?",
          validate: answer => {
            const pass = answer.match(
              // this is regex expressions calls a numeric string
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the team manager's email?",
          validate: answer => {
            const pass = answer.match(
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          }
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the team manager's office number?",
          validate: answer => {
            const pass = answer.match(
              // regex expression that calls numeric strings
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        }
      ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        employeeTeam.push(manager);
      memberIDArray.push(answers.managerId);
        buildTeam();
      });
    }
  
    function buildTeam() {
  
      inquirer.prompt([
        {
          type: "list",
          name: "teamMember",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
          ]
        }
      ]).then(userChoice => {
        switch (userChoice.teamMember) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            teamBuilder();
        }
      });
    }
  
    function addEngineer() {
      inquirer.prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's id?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              if (memberIDArray.includes(answer)) {
                return "This ID is already exist. Please enter a different number.";
              } else {
                return true;
              }
  
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email?",
          validate: answer => {
            const pass = answer.match(
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          }
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is your engineer's GitHub username?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        }
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        employeeTeam.push(engineer);
      memberIDArray.push(answers.engineerId);
        buildTeam();
      });
    }
  
    function addIntern() {
      inquirer.prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        },
        {
          type: "input",
          name: "internId",
          message: "What is your intern's id?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              if (memberIDArray.includes(answer)) {
                return "This ID is already taken. Please enter a different number.";
              } else {
                return true;
              }
  
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email?",
          validate: answer => {
            const pass = answer.match(
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          }
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is your intern's school?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        }
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        employeeTeam.push(intern);
      memberIDArray.push(answers.internId);
        buildTeam();
      });
    }
  
    function teamBuilder() {
      // Create the output directory if the output path doesn't exist
      if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, render(employeeTeam), "utf-8");
    }
  
    createManager();
  
  }
  
  appChoices();
  const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html");
  