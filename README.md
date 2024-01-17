# README.md Generator app using ES6 and NodeJS

## Description 

This is the solution for the challenge from EdX bootcamp, Week 11.  
During Week 11 I learnt to differentiate between ```JavaScript``` in the browser and ```Node.js``` environments, and also ```ES6```.  
My task was to apply the skills I acquired and make a command-line app that will dynamically generate a professional README file from a user's input using the Inquirer package.  
Check out the [Link to Sample README](dist/sampleREADME.md) in this repo as an example. 

## Table of contents
1. [User story](#user_story)
2. [Acceptance Criteria](#acceptance_criteria)
3. [Installation](#installation)
4. [Collaboration](#collaboration )
5. [Resources](#resources)
6. [License](#license)

## User story

- As a developer,
- I want a README generator 
- so that I can quickly create a professional README for a new project

## Acceptance Criteria
- Create a command-line application that accepts user input.
  - When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    - The title of my project
    - Sections entitled:
      - Description
      - Table of Contents
      - Installation
      - Usage
      - License
      - Contributing
      - Tests
      - Questions
    - When a user enters the project title then it is displayed as the title of the README
    - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    - When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    - When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    - When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    - When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README

## Installation 
To set up this project, open the terminal and execute the ```npm install``` command within the repository folder.  
After all dependencies are installed, execute the ```node index.js``` command.

## License 
This project is licensed under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



