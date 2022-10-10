const inquire = require("inquirer");
const Manager = require("./Staff/manager");
const Engineer = require("./Staff/engineer");
const Intern = require("./Staff/intern");
const generateSite = require("../GroupProfileGenerator/generateSite");
const fs = require("fs");
const path = require("path");
const { default: inquirer } = require("inquirer");
const output_Dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_Dir, "team.html");
const teamMembers = [];

const promptManager = () => {
  return inquire.prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "enter your employee Id (Required)",
      validate: (employeeId) => {
        if (employeeId) {
          return true;
        } else {
            console.log('Please enter your employee Id!');
            return false:
        }
      },
    },
    {
        type: 'input',
        name: 'email',
        message:'enter your E-mail address (Required)',
        validate: email => {
            if (email){
                return true;
            } else{
                console.log('Please enter your E-mail address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your office number(Required)',
        validate: officeNumber =>{
            if (officeNumber) {
                return true;
            } else{
                console.log('Pease enter your office number!');
                return false;
            }
        }
    },
  ]). then(answers =>{
    console.log(answers);
    const manager = new Manager (answers.name, answers.employeeId, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptMenu();
  })
};


