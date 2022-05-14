// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generateMarkdown.js');
const generateMarkdown = require('./src/generateMarkdown.js');


const questions = [
    // TODO: Create an array of questions for user input
    {
        type: 'input', 
        name: 'title', 
        message: 'WHAT IS THE NAME OF YOUR PROJECT? *REQUIRED*',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('PROJECT TITLE IS REQUIRED!');
                return false;
            }
        }
    }, 
    // PROJECT DESCRIPTION/INFORMATION
    {
        type: 'input', 
        name: 'description', 
        message: 'PLEASE DESCRIBE YOUR PROJECT *REQUIRED*', 
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('PROJECT DESCRIPTION IS REQUIRED!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'addImg', 
        message: 'WOULD YOU LIKE TO INCLUDE AN IMAGE? (press enter to skip)',
        default: false
    },
    {
         type: 'input', 
         name: 'install', 
         message: 'INCLUDE HOW TO INSTALL? (press enter to skip)',
         default: false
    },
    {
        type: 'checkbox',
        name: 'languages', 
        message: 'What did you build this project with? (Check all that apply)',
        choices: [' JavaScript', ' HTML', ' CSS', ' ES6', ' jQuery', ' Bootstrap', ' Node']
    },
    {
         type: 'input',
         name: 'usage',
         message: 'INCLUDE USAGE? (press enter to skip)', 
         default: false
    },
    {
        type: 'checkbox',
        name: 'license', 
        message: 'PLEASE CHOOSE A LICENSE',
        choices: ['Apache', 'Common-Development-and Distribution','GNU-General-Public','MIT', 'Mozilla-Public','None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('YOU MUST CHOOSE ONE');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'WOULD YOU LIKE TO ADD CONTRIBUTORS? (press enter to skip)',
        default: false
    },
    {
        type: 'input',
        name: 'tests',
        message: 'WOULD YOU LIKE TO ADD TEST? (press enter to skip)',
        default: false
    },

    // QUESTIONS SECTION
    {
        type: 'input', 
        name: 'github', 
        message: 'INCLUDE YOUR GITHUB *REQUIRED*',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else{
            console.log('GITHUB IS REQUIRED');
            return false;
          }
        }
    },
    {
        type: 'input', 
        name: 'email', 
        message: 'PLEASE INCLUDE YOUR EMAIL *REQUIRED*',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else{
            console.log('EMAIL IS REQUIRED');
            return false;
          }
        }
      }
]
       
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
                console.log("YOU'RE ALL SET! CHECK THE NEWLY CREATED README!!")
    });
};

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(function (userInput) {
       console.log(userInput);
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
