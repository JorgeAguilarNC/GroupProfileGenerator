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
  ]);
};
