// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        // TODO: Create an array of questions for user input
        {
            type: 'input', 
            name: 'name', 
            message: 'WHAT IS THE NAME OF YOUR PROJECT? *REQUIRED*',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('PROJECT NAME IS REQUIRED!');
                    return false;
                }
            }
        }, 
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
            name: 'userStory', 
            message: 'INCLUDE USER STORY?',
        },
        {
            type: 'checkbox',
            name: 'languages', 
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'confirm',
            name: 'confirmInstructions',
            message: 'DO YOU WANT TO INCLUDE INSTRUCTIONS?', 
            default: false
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'PROVIDE INSTRUCTIONS ON USE:', 
            when: ({ confirmInstructions }) => {
              if (confirmInstructions) {
                return true;
              } else {
                return false;
              }
            }
        },
        {
            type: 'input', 
            name: 'github', 
            message: 'INCLUDE YOUR GITHUB? *REQUIRED*',
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
            name: 'walkthru-link', 
            message: 'WHAT IS THE LINK TO THE WALK THROUGH VIDEO? *REQUIRED*',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else{
                console.log('WALK THROUGH LINK IS REQUIRED!');
                return false;
              }
            }
          }
    ]);
};
promptUser()


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
