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
## Description
${data.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributors
${data.contributors}
## Tests
${data.tests}
## Questions
If you have any questions about the repo, open an issue or contact me directly at [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect). You can find more of my work at [github/${data.username}](https://github.com/${data.username}).
`;
  }
  module.exports = generateMarkdown;
  
  