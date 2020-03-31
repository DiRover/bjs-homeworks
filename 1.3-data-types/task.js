"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let today = new Date();       
    let mounthPay;
    let percentOfMonth;
    let bodyOfMortgage;
    let totalAmount;
    if (isNaN(percent)) {
        percent = parseInt(percent);
        if (isNaN(percent)) {
            return `Параметр "процентная ставка" содержит неправильное значение ${percent}`;
        }
    }
    if (isNaN(contribution)) {
        contribution = parseInt(contribution);
        if (isNaN(contribution)) {
            return `Параметр "первоначальный взнос" содержит неправильное значение ${contribution}`;
        }
    }
    if (isNaN(amount)) {
        percent = parseInt(amount);
        if (isNaN(amount)) {
            return `Параметр "сумма кредита" содержит неправильное значение ${amount}`;
        }
    }    
    let mounths = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth()) - (today.getMonth());    
    percentOfMonth = percent / 12 / 100;
    bodyOfMortgage = amount - contribution
    mounthPay = bodyOfMortgage * (percentOfMonth + percentOfMonth / (((Math.pow((1 + percentOfMonth), mounths) - 1))));    
    totalAmount = parseFloat((mounthPay * mounths).toFixed(2));    
    console.log(totalAmount);          
    return totalAmount;
}

function getGreeting(name) {    
    let greeting;
    if (name === undefined || name === null || name === "") {
        return greeting = "Привет, мир! Меня зовут Аноним";
    } else {
        return greeting = `Привет, мир! Меня зовут ${name}`;
    }   
}