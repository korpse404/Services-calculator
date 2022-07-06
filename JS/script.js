'use strict';

const appData = {
    title: '', 
    screens: [],
    screenPrice: 0,
    adaptive: true,
    services: {},
    rollback: 5,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    start: function() {
        appData.mainQuestions();
        appData.sumPrices();
        appData.getFullPrice();
        appData.getServicePercentPrice();

        appData.logger();
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    mainQuestions: function () {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор сайта");

        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;

            do {
                name = prompt("Какие типы экранов нужно разработать?");
            } while (parseInt(name));
            
            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price))
            
           appData.screens.push({ id: i, name: name, price: price });
        }


        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;

            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (parseInt(name));
            
            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price))
            
           appData.services[name] = +price;
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");

    },

    sumPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }

    },

    getFullPrice: function () {
        appData.fullPrice = appData.allServicePrices + +appData.screenPrice;
    },

    getTitle: function(str) {
        str = str.trim();
        str = str.toLowerCase();
        return str[0].toUpperCase() + str.slice(1);
      },

    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    
    getRollbackMessage: function () {
        switch (true) {
        case appData.fullPrice >= 30000:
            return `Даем скидку в 10%!`;
            break;
        case appData.fullPrice >= 15000:
            return `Даем скидку в 5%!`; 
            break;
        case appData.fullPrice >= 0:       
            return "Скидка не предусмотрена";
            break;
        default:
            return "Что-то пошло не так";
    }},

    logger: function () {
        console.log("Название проекта - " + appData.getTitle(appData.title));
        console.log(appData.screens);
        console.log(`Стоимость верстки экранов ${appData.screenPrice} долларов`);
        console.log(`Стоимость разработки сайта ${appData.fullPrice} долларов`);
        console.log(`Цена сайта минус % отката ${appData.servicePercentPrice}`);
        console.log(appData.getRollbackMessage());

    }
}

appData.start()


