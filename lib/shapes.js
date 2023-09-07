class Triangle {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
    }
  }
  
  class Square {
    render() {
      return `<rect x="25" y="25" width="200" height="200" fill="red" />`;
    }
  }

  class Circle {
    render() {
      return `<<circle cx="125" cy="125" r="75" fill="purple" />`;
    }
  }
  
  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };