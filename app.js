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

const promptMenu = () => {
    return inquire.prompt([{
            type: 'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with:',
            choices: ['add an engineer', 'add an intern', 'finish building my ream']
    }])
    .then(userChoice =>{
        switch (userChoice.menu) {
            case "add an engineer":
                promptEngineer();
                break;
                case "add anintern":
                    promptIntern();
                    break;
                    default:
                        buildTeam();
        }
    });
};

const promptEngineer = () => {
    console.log('Add a New Engineer');
    return inquire.prompt([{
        type: 'input',
        name: 'name',
        message: 'what is the name of Engineer? (Required)',
        validate: engineerName =>{
            if (engineerName) {
                return true;
            } else{
                console.log('please enter the name of Engineer!');
            }
        },
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Enter your employee Id (Required)',
        validate: employeeId =>{
            if (employeeId) {
                if (employeeId) {
                    return true;
                } else{
                    console.log('Please enter your employee Id!');
                    return false;
                }
            }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: email => {
            if (email) {
                return true;
            } else{
                console.log('Please enter your E-mail address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'Enter your GitHub username. (Required)',
        validate: githubUserName => {
            if (githubUserName) {
                return true;
            } else{
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
]).then(answers => {
    console.log (answers);
    const engineer = new Engineer (answers.name, answers.employeeId, answers.email, answers.githubUserName);
    teamMembers.push(engineer);
    promptMenu();
})
};
//intern
const promptIntern = () => {
    console.log('add a new intern ');
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'what is the name of the intern? (Required)',
        validate: internName => {
            if (internName){
                return true;
            } else {
                console.log('please enter the name of the intern!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log ('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Ener your school name. )Required)',
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log('Please enter your school name!');
                return false;
            }
        }
    }
]).then(answers => {
    console.log(answers);
    const intern = new intern(answers.name, answers.employeeID, answers.email, answers.schoolName);
    teamMembers.push(intern);
    promptMenu();
})
};
const buildTeam = () => {
    console.log('build Team');
    if (!fs.existsSync (output_Dir)){
        fs.mkdirSync(output_Dir)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}
promptManager();
