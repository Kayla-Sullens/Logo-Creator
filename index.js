const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes.js');
const generateLogo = require('./lib/genSVG.js')

// Array of questions for user input
const init = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters for your logo.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a text color.',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for your logo:',
        choices: [
            'Triangle',
            'Square',
            'Circle',
        ],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a shape color.',
    },
    ]).then(answers => {
        const svg = generateLogo(answers);

        const fileName = './examples/logo.svg';
        console.log(svg);
        fs.writeFile(fileName, svg, (err) => {
            err ? console.log(err) : console.log(`Generated logo.svg`);
        })
    });
};

init();