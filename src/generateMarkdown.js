

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
    ## Table of Contents
    -[Description](#description)
    -[User Story](#userStory)
    -[Languages](#languages)
    -[Instructions](#instructions)
    -[Walk Trough Link](#walkthru-link)
    -[Github Link](#github)

    ## Description:
    ${data.description}
    
    ## User Story
    ${data.userStory}
    
    ## Languages
    ${data.languages}

    ## Instructions
    ${data.instructions}

    ## Walk Through Link
    ${data.walkthru-link}
    
    ## Github Link
    ${data.github}
`;
}

module.exports = generateMarkdown;
