const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
    test("Test for a blue triangle", () => {
        const shapeT = new Triangle();
        shapeT.setColor("blue");
        expect(shapeT.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe("Square test", () => {
    test("Test for a red square", () => {
        const shapeS = new Square();
        shapeS.setColor("red");
        expect(shapeS.render()).toEqual('<rect x="25" y="25" width="200" height="200" fill="red" />');
    });
});

describe("Circle test", () => {
    test("Test for a purple circle", () => {
        const shapeC = new Circle();
        shapeC.setColor("purple");
        expect(shapeC.render()).toEqual('<circle cx="125" cy="125" r="75" fill="purple" />');
    });
});