'use strickt'
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};


function sum(...args) {
  // Замедление на половину секунды.
  //sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
};

function compareArrays( arr1, arr2 ) {
  if (arr1.length !== arr2.length) return false
  return arr1.every((element, index) => element === arr2[index])
}

function memorize(fn, limit) { 
  const memory = [];
  return function (...args) {
    let findResult = memory.find(elem => compareArrays(elem.args, args));
    //let findResult = memory.find(function(elem){compareArrays(elem.args, args)}) // - ещё один вариант
    if (findResult) {
      console.log('Result from memory');
      return findResult.result
    }       
    if (memory.length === limit) {
      memory.shift()
    }   
    memory.push({args: args, result: fn(...args)})  
    return fn(...args)
  } 
}

const arr = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];
function testCase(testFunction) {
  console.time('testFunction');
  for (let i = 0; (i < 10 * arr.length); i++) {
    //arr.forEach(function(item){testFunction.apply(null, item)});
    arr.forEach(item => testFunction(...item));    
  }
  console.timeEnd('testFunction');
}
testCase(sum);
// 25050.576171875ms - выполнение sum c замедлением
// 3020.082763671875ms - выполнение модифицированной sum c замедлением
// 0.151123046875ms - выполнение sum без замедления
// 15.447265625ms - выполнение модифицированной sum без замедленя
/*Вывод: модифицированная функция с замедлением выполняется быстрее, т.к. способна находить результат идентичных
опреций в памяти и не выполняет больше ни каких вычислений. Модифицированная функция без замедления выполняется
медленне опять же из-за её обращения к памяти*/