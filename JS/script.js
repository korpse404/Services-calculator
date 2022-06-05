'use strict';

let title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
const rollback = 5;
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой еще дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const showTypeOf = function(variable) {
    return variable, typeof variable;
}

let getAllServicePrices = function() {   
    return servicePrice1 + servicePrice2;
}

let allServicePrices = getAllServicePrices();

function getFullPrice () {
    return allServicePrices + screenPrice;
}

const fullPrice = getFullPrice();

const getTitle = function(str) {
    str = str.trim();
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
  }

let getServicePercentPrice = () => {
    return fullPrice - (fullPrice / 100 * rollback);
}

let servicePercentPrice = getServicePercentPrice();

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


console.log("ЭТО - " + getTitle(title));
console.log(showTypeOf(title), showTypeOf(fullPrice), showTypeOf(adaptive));
console.log(`Длинна строки ${screens.length}`);
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log("Типы экранов - " + screens.toLowerCase().split(", "));
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);
console.log(`Цена сайта минус % отката ${servicePercentPrice}`);
console.log(getRollbackMessage());