'use strict';

const appData = {
    title: '', 
    screens: '',
    screenPrice: 0,
    adaptive: true,
    service1: '',
    service2: '',
    rollback: 5,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    mainQuestions: function () {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор сайта");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
     
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice)) 
    
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    getAllServicePrices: function() {   
        let sum = 0;
        
        for (let i = 0; i < 2; i++) {
            let numberCheck;
    
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1) {
                appData.service2 = prompt("Какой еще дополнительный тип услуги нужен?");
            }
            
            do {
                numberCheck = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(numberCheck))
            
            sum += +numberCheck;
        }
    
        return sum;
    },

    getFullPrice: function () {
        return appData.allServicePrices + +appData.screenPrice;
    },

    getTitle: function(str) {
        str = str.trim();
        str = str.toLowerCase();
        return str[0].toUpperCase() + str.slice(1);
      },

    getServicePercentPrice: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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

    start: function() {
        appData.mainQuestions();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrice();
        appData.logger();
    },

    logger: function () {
        console.log("Название проекта - " + appData.getTitle(appData.title));
        console.log(`Длинна строки ${appData.screens.length}`);
        console.log(`Стоимость верстки экранов ${appData.screenPrice} долларов`);
        console.log("Типы экранов - " + appData.screens.toLowerCase().split(", "));
        console.log(`Стоимость разработки сайта ${appData.fullPrice} долларов`);
        console.log(`Цена сайта минус % отката ${appData.servicePercentPrice}`);
        console.log(appData.getRollbackMessage());
        for (let key in appData) {
          console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
        }
      }
}

appData.start()


