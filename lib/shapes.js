class Triangle {
    setColor(shapeColor) {
        this.shapeColor = shapeColor
    }
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
  }
  
  class Square {
    setColor(shapeColor) {
        this.shapeColor = shapeColor
    }
    render() {
      return `<rect x="25" y="25" width="200" height="200" fill="${this.shapeColor}" />`;
    }
  }

  class Circle {
    setColor(shapeColor) {
        this.shapeColor = shapeColor
    }
    render() {
      return `<<circle cx="125" cy="125" r="75" fill="${this.shapeColor}" />`;
    }
  }
  
  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };