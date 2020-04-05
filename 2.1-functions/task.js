'use strict'
function getSolutions( a, b, c ) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let roots = [];    
    if (D < 0) {
        return {D: D, roots: roots};
      } else if (D === 0) {        
        roots.push(-b / (2 * a));
        return {D: D, roots: roots};
      } else {        
        roots.push((-b + Math.sqrt(D)) / (2 * a));        
        roots.push((-b - Math.sqrt(D)) / (2 * a));
        return {D: D, roots: roots};
      } 
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        return `Уравнение не имеет вещественных корней`;
      } else if (result.D === 0) {
        return `Уравнение имеет один корень X₁ = ${result.roots}`;
      } else {
        return `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
      }
}

function getAverageScore(data) {
  let value = 0;
  let obj = {};
  let dataLength = 0;
  let average;
  for (let prop in data) {
    obj[ prop ] = getAverageMark(data[prop]); //запись нового объекта со средними значениями оценок по предмету
    dataLength++   //подсчёт кол-ва элементов в объекте
  }
  for (let prop in obj) {
    value += obj[ prop ];  
  }  
  dataLength === 0 ? obj['average'] = 0 : obj['average'] = value / dataLength; //проврка на 0 и подсчёт общей средней оценки
  return obj
}

function getAverageMark(marks) {
  let sum = 0;  
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  console.log(marks.length);
  return marks.length !== 0 ? sum / marks.length : 0; //проверка на 0
}

function getPersonData(secretData) {
  let obj = {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
    };  
  return obj;
}

function getDecodedValue(secret) {  
    if (secret === 0) {
      secret = "Родриго";
    } else {
      secret = "Эмильо";
    }
    return secret;  
}