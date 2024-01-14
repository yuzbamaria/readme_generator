// function to create a license badge based on user input
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
    } return '';
  }

function renderLicenseLink(license) {
    if (license !== 'None') {
        return `* [License](#license)`
    } return '';
}

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License \n This project is licensed under ${license} license`
    } return '';
}


  // function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Tests
${data.tests}
${renderLicenseSection(data.license)}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.username}](https://github.com/${data.username}).
`;
  }
  module.exports = generateMarkdown;
  
  