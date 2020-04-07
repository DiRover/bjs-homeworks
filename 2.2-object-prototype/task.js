'use strict'
function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    } else {
        let animalSound = animal.sound;
        return animalSound;
    }
}

function getAverageMark(marks) {
    let averageMark;
    if (marks.length == 0) {        
        return 0;
    } else {
        let sum = 0;  
        for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        }
        averageMark = Math.round(sum / marks.length);
        return averageMark;  
    }    
}

function checkBirthday(birthday) {
    let now = new Date();
    let date = new Date(birthday);
    let diff = now.getTime() - date.getTime();
    let age = (diff - 86400000 * 5) / 31536000000; //86400000 * 5 - учёт високосных годов
    //(в 18 лет 5 високосных годов, 86400000мс в сутках)
    console.log(age);
    return age > 18 ? true : false;
}