'use strict';
class Weapon {  
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.durabilityOriginal = durability;
        this.range = range;        
    }
    takeDamage(damage) {        
        this.durability = this.durability - damage;
        return this.durability > 0 ? this.durability : this.durability = 0; 
    }
    getDamage() {      
        if (this.durability === 0) {
          return this.attack = 0;
        } else if (this.durability < this.durabilityOriginal*0.3) {          
          return this.attack / 2;
        } else {
          return this.attack;
        }
      }
    isBroken() {            
      return this.durability > 0 ? false : true;
    }
};

class Bow extends Weapon {
    constructor() {        
          super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
  };
  class Arm extends Weapon {
    constructor() {
          super({name: 'Рука', attack: 1, durability: Infinity, range: 1});    
    }
  };
  class Sword extends Weapon {
    constructor() {
          super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }  
  };
  class Knife extends Weapon {
    constructor() {
          super({name: 'Нож', attack: 5, durability: 300, range: 1});          
    }
  };
  class Staff extends Weapon {
    constructor() {
          super({name: 'Посох', attack: 8, durability: 300, range: 2});         
    }
  };
  class LongBow extends Bow {
    constructor() {
          super();             
          this.name = 'Длинный лук';
          this.attack = 15;
          this.durability = this.durability;
          this.range = 4;        
    }
  };
  
  class Axe extends Sword {
    constructor() {        
          super();
          this.name = 'Секира'
          this.attack = 27
          this.durability = 800
          this.range = this.range
          }
  };
  class StormStaff extends Staff {
    constructor() {
          super();            
          this.name = 'Посох Бури';
          this.attack = 10;
          this.durability = this.durability;
          this.range = 3;        
    }
  };

  class StudentLog {
    constructor(name) {
      this.name = name;
      this.amountGrades = [];
      this.subjectNames = {};
    }
    getName(name) {
      return this.name;
    }
    addGrade(grade, subject) {
      if (typeof grade !== 'number' || grade <= 0 || grade > 6) {
        return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
      } else {
          if (this.subjectNames.hasOwnProperty(subject)) {      
          this.subjectNames[subject].push(grade);                     
        } else {     
            this.subjectNames[subject] = [];
            this.subjectNames[subject].push(grade);               
          }
        }    
      return this.subjectNames[subject].length;
    }
    getAverageBySubject(subject) {           
        if (!this.subjectNames.hasOwnProperty(subject)) {
          return 0;
        }      
        this.amountGrades.push(this.getAverageMark(this.subjectNames[subject]));   
        return this.getAverageMark(this.subjectNames[subject]);
    }
    getTotalAverage() { 
          if (this.amountGrades.length === 0) {
          return 0;
        }
        return this.getAverageMark(this.amountGrades);
    }
    getAverageMark(marks) {
      let sum = 0;  
      for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
      }
      return sum / marks.length; 
    }
  }