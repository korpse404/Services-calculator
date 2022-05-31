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
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);
console.log(screens.toLowerCase().split(", "));
// screens.toLowerCase(screens);
console.log(`Процент отката посреднику за работу ${rollbackValue} долларов`)

const servicePercentPrice = Math.ceil(fullPrice - rollbackValue);
console.log(servicePercentPrice);

switch (true) {
    case fullPrice > 30000:
        console.log(`Даем скидку в 10%! - ${(fullPrice - (fullPrice * 0.1))}`);
        break;
    case fullPrice < 30000 && fullPrice > 15000:
        console.log(`Даем скидку в 5%! - ${(fullPrice - (fullPrice * 0.05))}`);
        break;
    case fullPrice < 15000 && fullPrice > 0:
        console.log("Скидка не предусмотрена");
        break;
    default:
        console.log("Что то пошло не так");
    
}