const { Triangle, Square, Circle } = require('./shapes.js');
const SVG = require('./svg.js');

module.exports = ({ text, textColor, shape, shapeColor }) => {
    let logo = shape == 'Triangle' ?
        new Triangle() :
        shape == 'Square' ?
            new Square() :
            new Circle();

    const svg = new SVG();
    logo.setColor(shapeColor);
    svg.setShape(logo);
    svg.setText(text, textColor);
    const output = svg.render();

    return output
};