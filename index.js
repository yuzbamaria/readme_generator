// External packages
const fs = require("fs").promises;
// imports the Node.js built-in module path into your script or application. 
// The path module provides utilities for working with file and directory paths.
// The path module takes the responses (array questions) and puts them in generateMarkdown.js
const path = require('path');
const inquirer = require("inquirer");

// Internal modules
// generateMarkdown pulls whatever is made in generateMarkdown.js to index.js
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        // validation: 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Boost 1.0', 'None'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project? Please, use Github usernames)',
        default: '',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide walkthrough of required tests if applicable',
        default: 'No tests at this time',
    },
];

// function to write README file
// When a function is marked with async and it contains the await keyword, 
// the expression following await is expected to be a Promise. 
// The await keyword pauses the execution of the async function until the Promise is resolved.
async function writeToFile(fileName, data) {
    // try-catch statement for handling errors
    try {
        // Step 1: Create the full path to the file
        // Ensure the correct working directory is used when constructing the full path
        // path.join() takes one or more path segments as arguments and joins them together
        // process.cwd() returns the current working directory of the Node.js process.
        const fullPath = path.join(process.cwd(), fileName);

        // Step 2: Asynchronously write data to the file
        await fs.writeFile(fullPath, data);

        // Step 3: Log a success message if writing is successful
        console.log(`File "${fullPath}" written successfully.`);

    } catch (error) {
        // Step 4: Handle errors if any occur during the process
        console.error(`Error writing file: ${error.message}`);
    }
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/sampleREADME.md", generateMarkdown({ ...responses }));
      });
    }

// function call to initialize program
init();
