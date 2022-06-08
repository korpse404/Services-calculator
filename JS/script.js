'use strict';

let title;
let screens;
let screenPrice;
let adaptive;

let service1;
let service2;

let rollback = 5;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const mainQuestions = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор сайта");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
 
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice)) {
        if (!isNumber(screenPrice)) {
            screenPrice = prompt("Сколько будет стоить данная работа?");
        }
    }

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const showTypeOf = function(variable) {
    return variable, typeof variable;
}

const getAllServicePrices = function() {   
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
        let numberCheck;

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой еще дополнительный тип услуги нужен?");
        }
        
        do {
            numberCheck = prompt("Сколько это будет стоить?");
        } while (!isNumber(numberCheck))
        
        sum += +numberCheck;
    }

    return sum;
}

const getFullPrice = function () {
    return allServicePrices + +screenPrice;
}

const getTitle = function(str) {
    str = str.trim();
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
  }

const getServicePercentPrice = () => {
    return fullPrice - (fullPrice * (rollback / 100));
}

const getRollbackMessage = () => {
    switch (true) {
    case fullPrice >= 30000:
        return `Даем скидку в 10%!`;
        break;
    case fullPrice >= 15000:
        return `Даем скидку в 5%!`; 
        break;
    case fullPrice >= 0:       
        return "Скидка не предусмотрена";
        break;
    default:
        return "Что-то пошло не так";
}}

mainQuestions();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();

console.log("Название проекта - " + getTitle(title));
console.log(showTypeOf(title), showTypeOf(fullPrice), showTypeOf(adaptive));
console.log(`Длинна строки ${screens.length}`);
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log("Типы экранов - " + screens.toLowerCase().split(", "));
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);
console.log(`Цена сайта минус % отката ${servicePercentPrice}`);
console.log(getRollbackMessage());