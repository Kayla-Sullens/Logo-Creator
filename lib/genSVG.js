const { Triangle, Square, Circle } = require('./shapes.js')

module.exports = ({text, textColor, shape, shapeColor}) => {
    let logo = shape == 'Triangle' ?
            new Triangle : 
        shape == 'Square' ?
            new Square :
            new Circle;


    logo.setColor(shapeColor);


    output = `
    ${logo.render()}
    ${text}
    ${textColor}
    `
};