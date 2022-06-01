'use strict';
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
const rollback = 5;
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой еще дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollbackValue = fullPrice * (rollback/100);

alert("Это - всплывающее сообщение");
console.log("А это - сообщение в консоли");

console.log("title - это " + typeof title + ",", " fullPrice - это " + typeof fullPrice + ",", " adaptive - это " + typeof adaptive);
console.log(`Длинна строки ${screens.length}`);
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(screens.toLowerCase().split(", "));
console.log(`Процент отката посреднику за работу ${rollbackValue} долларов`)
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);
const servicePercentPrice = Math.round(fullPrice - rollbackValue);
console.log(`Цена сайта минус % отката ${servicePercentPrice}`);
let totalPrice;

switch (true) {
    case servicePercentPrice >= 30000:
        totalPrice = servicePercentPrice - (servicePercentPrice * 0.1);
        console.log(`Даем скидку в 10%! - ${totalPrice}`);
        break;
    case servicePercentPrice < 30000 && servicePercentPrice >= 15000:
        totalPrice = servicePercentPrice - (servicePercentPrice * 0.05);
        console.log(`Даем скидку в 5%! - ${totalPrice}`);
        break;
    case servicePercentPrice < 15000:
        console.log("Скидка не предусмотрена, ", servicePercentPrice);
        break;
    default:
        console.log("Что то пошло не так"); 
}

