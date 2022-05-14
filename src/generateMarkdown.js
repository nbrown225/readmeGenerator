

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
  ## Table of Contents
  - [Description](#description)
    - [Installation](#install)
    - [Usage](#usage)
    - [Languages](#languages)
    - [Licensing](#license)
    - [Tests](#tests)
  - [Questions](#questions)
    - [Github Link](#github)
    - [Email](#email)
    ## Description:
    ${data.description} 
    ### Image
    ![screenshot](${data.addImg})
    ### Installation
    - ${data.install}
    ### Usage
    - ${data.usage}
    ### Languages
    - ${data.languages}
    ### Licensing
    ${data.license}
    [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
    ### Contributors
    - ${data.contribute}
    ### Tests
    - ${data.tests}
    ## Questions?
    ### Github Link
    - ${data.github}
    ### Email
    - ${data.email}

`;
}

module.exports = generateMarkdown;
