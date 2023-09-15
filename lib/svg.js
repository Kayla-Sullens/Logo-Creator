class SVG {
    constructor(){
        this.textElement = '';
        this.shapeElement = '';
    }

    setShape(shape) {
        this.shapeElement = shape.render();
    }

    setText(text, color) {
        if(text.length > 3){
            throw new Error('Text length cannot be greater than 3');
        }

        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.shapeElement}
            ${this.textElement}
        </svg>
        `
    }
}

module.exports = SVG;