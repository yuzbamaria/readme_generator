// function to create a license badge based on user input
function renderLicenseBadge(license) {
    if (license) {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
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
    ## Questions
    ${data.questions}
    Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.username}](https://github.com/${data.username}).
  `;
  }
  module.exports = generateMarkdown;
  
  