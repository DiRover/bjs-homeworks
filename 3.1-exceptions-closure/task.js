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
      let semiPerimeter = (this.a + this.b + this.c) / 2;
      let area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
      return Number.parseFloat(area.toFixed(3));
    }
  };
  
  function getTriangle(a, b, c){
    try {
      const triangle = new Triangle(a, b, c);
      return triangle;
    }catch(e){
      const obj = {
        getPerimeter: () => "Ошибка! Неправильный треугольник",
        getArea: () => "Ошибка! Неправильный треугольник"
      }
      return obj;
    }
  };