
'use strict'
function getResult(a,b,c) {    
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    if (d > 0) {
      x.push((-b + Math.sqrt(d)) / (2 * a));
      x.push((-b - Math.sqrt(d)) / (2 * a));
    } else if (d === 0) {
        x.push(-b / (2 * a));
    }
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    let averageMark = 0;
    if (marks.length > 5) {
      console.log('оценок больше 5');
      marks = marks.splice(0, 5);
    } else if (marks.length === 0) {
      return averageMark = 0;
    }
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    averageMark = sum / marks.length;  
   return averageMark;
}

function askDrink(name,dateOfBirthday){
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let today = new Date();
    let year = today.getFullYear();    
    if (year - yearOfBirthday < 18) {
      return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
      return `Не желаете ли олд-фэшн, ${name}?`;
    }    
}