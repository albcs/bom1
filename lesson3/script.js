let money;
let time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
        let b = prompt('Во сколько обойдется?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('Done');
            appData.expenses[a] = b;
        } else {
            console.log('Bad result');
            i--;
        }
    }
}
chooseExpenses();

// Цикл while
// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//     let b = prompt('Во сколько обойдется?', '');
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Done');
//         appData.expenses[a] = b; 
//     } else {
//         console.log('Bad result');
//         i--;
//     }
//     i++;
// }

// Цикл do while
// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//     let b = prompt('Во сколько обойдется?', '');
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Done');
//         appData.expenses[a] = b; 
//     } else {
//         console.log('Bad result');
//         i--;
//     }
//     i++;
// } while (i < 2);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?');
        let percent = +prompt('Под какой процент?');

        appData.mounthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.mounthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let questionOptionalExpenses = +prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = questionOptionalExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();
