

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers)
  return `# ${answers.title}

  ## Description 
  ${answers.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Credits](#credits)

  * [License](#license)

  * [Github](#Github)

  
  ${answers.table}
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## Licence
  ${answers.licence} 

  ![GitHub license](https://img.shields.io/badge/license-${answers.licence}-green.svg)
  ---

  ## Badges
  ${answers.badges}

  ## How to Contribute
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## Questions
  Please feel free to reach out if you have any questions:
  ${answers.questions2}

  ## Github:
  [GitHub Profile Link](https://github.com/${answers.questions})
  
`;
}
// Export to Index.js
module.exports = generateMarkdown;

