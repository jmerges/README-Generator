const fs = require("fs");
const inquirer = require("inquirer");

const badges = {
    MIT: "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)",
    GPLv3: "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)",
    AGLP: "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)"
};

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
        {
            type: "list",
            choices: ["MIT","GPLv3","AGPL"],
            name: "license"
        },
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email:",
            name: "email"
        }
    ])
        .then(info => {
            console.log(info);
            readmeString = `# ${info.title}
${badges[info.license]}
## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Test](#Test)
- [License](#License)
- [Questions](#Questions)
## Description
${info.description}
## Installation
${info.installation}
## Usage
${info.usage}
## Contribution
${info.contribution}
## Test
${info.test}
## License
Application is covered under the ${info.license} license.
## Questions
GitHub: https://github.com/${info.github}  
If you have additional questions, you can reach me at ${info.email}`;
            fs.writeFile("./output/README.md",readmeString,(err) => {
                if (err) throw err;
                console.log('The file has been saved!');
              });
        });