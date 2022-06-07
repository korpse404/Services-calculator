'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let rollback = 5;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let allServicePrices;
let fullPrice;
let servicePercentPrice;


const showTypeOf = function(variable) {
    return variable, typeof variable;
}

const getAllServicePrices = function() {   
    return servicePrice1 + servicePrice2;
}

function getFullPrice () {
    return allServicePrices + screenPrice;
}

const getTitle = function(str) {
    str = str.trim();
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
  }

const getServicePercentPrice = () => {
    return fullPrice - (fullPrice / 100 * rollback);
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