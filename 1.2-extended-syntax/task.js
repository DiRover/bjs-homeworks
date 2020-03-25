
'use strict'
function getResult(a,b,c) {    
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    if (d < 0) {
        x = [];
    } else if (d === 0) {
        x.push(((-1) * b) / (2 * a));
    } else {
        x.push((((-1) * b) + Math.sqrt(d)) / (2 * a));
        x.push((((-1) * b) - Math.sqrt(d)) / (2 * a));
    }
    return x;
}

function getAverageMark(marks){
    let sum = 0;
  let averageMark = 0;
  if (marks.length === 0) {
    averageMark = 0;     
  } else if (marks.length <= 5) {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
      averageMark = sum / marks.length;          
    } 
    } else {
      console.log('оценок больше 5');
      marks.splice(5);
      for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        averageMark = sum / marks.length;        
      }
    }   
   
   return averageMark;
}

function askDrink(name,dateOfBirthday){
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let today = new Date();
    let year = today.getFullYear();
    let result = year - yearOfBirthday;
    if (result < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    return result;
}