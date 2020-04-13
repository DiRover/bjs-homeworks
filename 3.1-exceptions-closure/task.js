'use strickt'
function parseCount(amount) {
    if (parseInt(amount, 10)) {
        return parseInt(amount, 10)
    } else {       
        throw new Error("Невалидное значение");
    }
};
function validateCount(amount) {
  try {    
    return parseCount(amount);
  }catch(e){    
    return e;
  }
};

class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if ((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.c + this.a) < this.b) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
    getPerimeter() {
      return this.a + this.b + this.c;
    }
    getArea() {    
      let area = 0.25 * Math.sqrt(Math.pow((Math.pow(this.a, 2) + Math.pow(this.b, 2) + Math.pow(this.c, 2)), 2) - 2 * (Math.pow(this.a, 4) + Math.pow(this.b, 4) + Math.pow(this.c, 4)));        
      return Number.parseFloat(area.toFixed(3));
    }
  };
  
  function getTriangle(a, b, c){
    try {
      const triangle = new Triangle(a, b, c);
      return triangle;
    }catch(e){
      return e;
    }
  };