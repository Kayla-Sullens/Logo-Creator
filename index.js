const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require("./lib/shapes.js");


// Array of questions for user input
const init = () => {
    inquirer.prompt([{
    type: 'input',
    name: 'characters',
    message: 'Please enter up to 3 characters for your logo.',
},
{
    type: 'input',
    name: 'text-color',
    message: 'Please enter a text color.',
},
{
    type: 'list',
    name: 'shape-type',
    message: 'Please select a shape for your logo:',
    choices: [
        'Triangle', 
        'Square', 
        'Circle', 
    ],
},
{
    type: 'input',
    name: 'shape-color',
    message: 'Please enter a shape color.',
},
])}.then(answers) => {
    const svg = generateLogo(answers);

    const fileName = './examples/logo.svg';
    fs.writeFile(fileName, svg, (err) => {
        err ? console.log(err) : console.log(`Generated logo.svg`);
    })
};

init();