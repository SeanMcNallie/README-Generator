// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input


inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Table of Contents will be generated automatically. (Press Enter)',
        name: 'table',
      },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use.',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits',
    },
    
      {
        type: 'list',
        message: 'Which Licence did you use?',
        name: 'licence',
        choices: ['MIT', 'Community', 'GNU', 'None'],
      },
      {
        type: 'input',
        message: 'Add a Badge to your project?',
        name: 'badges',
      },
      {
        type: 'input',
        message: 'Do you have any guidlines for other to contribute to your project?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Please provide test examples here.',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Enter your GitHub username and a link to your GitHub profile will be created?',
        name: 'questions',
      },
      {
        type: 'input',
        message: 'What email can people reach you at if they have questions about your application?',
        name: 'questions2',
      },


// TODO: Create a function to write README file
  ])
  .then(response => {
    const readMePageContent = generateMarkdown(response);

    fs.writeFile('README.md', readMePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md File')
  );
  }
  
  );
