const title = "Учебный проект 1";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 100;
const rollback = 5;
const fullPrice = 1500;
const adaptive = true;

alert("Это - всплывающее сообщение");
console.log("А это - сообщение в консоли");

console.log("title - это " + typeof title + ",", " fullPrice - это " + typeof fullPrice + ",", " adaptive - это " + typeof adaptive);
console.log(`Длинна строки ${screens.length}`);
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);
console.log(screens.toLowerCase().split(", "));
screens.toLowerCase(screens );console.log(`Процент отката посреднику за работу ${(fullPrice * (rollback/100))}`)