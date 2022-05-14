

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
  ## Table of Contents
  - [Description](#description)
  - [User Story](#userStory)
  - [Languages](#languages)
  - [Usage](#usage)
  - [Licensing](#license)
  - [Tests](#tests)
  - [Questions](#questions)
    - [Github Link](#github)
    - [Email](#email)

    ## Description:
    ${data.description}
    
    ### User Story
    ${data.userStory}
    ### Installation
    ${data.install}
    ### Languages
    - ${data.languages[0]}
    - ${data.languages[1]}
    - ${data.languages[2]}
    - ${data.languages[3]}
    - ${data.languages[4]}
    - ${data.languages[5]}
    - ${data.languages[6]}
    ### Usage
    ${data.usage}
    ### Licensing
    ${data.license}
    [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
    ### Contributors
    ${data.contribute}
    ### Tests
    ${data.tests}
    ## Questions?
    ### Github Link
    - ${data.github}
    ### Email
    - ${data.email}

`;
}

module.exports = generateMarkdown;
