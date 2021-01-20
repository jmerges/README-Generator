const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "Enter the project title:",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a description for the project:",
            name: "description"
        },
        {
            type: "input",
            message: "Enter the installation instructions for the project:",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter the usage information for the project:",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter the contribution guidelines for the project:",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter the test instructions for the project:",
            name: "test"
        },
    ])
        .then(info => {
            console.log(info);
            readmeString = `
# TITLE
## Description
${info.description}
## Installation Instructions
${info.installation}
## Usage Information
${info.usage}
## Contribution Guidelines
${info.contribution}
## Test Instructions
${info.test}
            `
            fs.writeFile("./output/README.md",readmeString,(err) => {
                if (err) throw err;
                console.log('The file has been saved!');
              });
        })