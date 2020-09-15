let startButton = document.querySelector('#start'); // Кнопка "Начать расчет"

let budgetValue = document.querySelector('.budget-value'); // Блок правой части программы
let daybudgetValue = document.querySelector('.daybudget-value'); // Блок правой части программы
let levelValue = document.querySelector('.level-value'); // Блок правой части программы
let expensesValue = document.querySelector('.expenses-value'); // Блок правой части программы
let optionalexpensesValue = document.querySelector('.optionalexpenses-value'); // Блок правой части программы
let incomeValue = document.querySelector('.income-value'); // Блок правой части программы
let monthsavingsValue = document.querySelector('.monthsavings-value'); // Блок правой части программы
let yearsavingsValue = document.querySelector('.yearsavings-value'); // Блок правой части программы

let expensesItem = document.querySelectorAll('.expenses-item'); // Блок обязательных расходов
let buttonApprove = document.querySelectorAll('button')[0]; // Кнопка "Утвердить блока обязательных расходов"
let buttonApproveOptional = document.querySelectorAll('button')[1]; // Кнопка "Утвердить блока необязательных расходов"
let buttonCalculate = document.querySelectorAll('button')[2]; // Кнопка "Рассчитать"

let optionalExpenses = document.querySelectorAll('.optionalexpenses-item'); // Блок необязательных расходов

let chooseIncome = document.querySelector('.choose-income'); // Блок статей возможного дохода
let savings = document.querySelector('#savings'); // Чекбокс "Есть ли накопления: "
let chooseSum = document.querySelector('.choose-sum'); // Поле "Сумма"
let choosePercent = document.querySelector('.choose-percent'); // Поле "Процент"
let yearValue = document.querySelector('.year-value'); // Поле "Год"
let monthValue = document.querySelector('.month-value'); // Поле "Месяц"
let dayValue = document.querySelector('.day-value'); // Поле "День"

let money;
let time;

buttonApprove.disabled = true;
buttonApproveOptional.disabled = true;
buttonCalculate.disabled = true;

startButton.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue = new Date(Date.parse(time)).getDay();

    buttonApprove.disabled = false;
    buttonApproveOptional.disabled = false;
    buttonCalculate.disabled = false;

});

let sum = 0;

buttonApprove.addEventListener('click', function () {

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('Done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log('Bad result');
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

buttonApproveOptional.addEventListener('click', function () {
    for (let i = 0; i < optionalExpenses.length; i++) {
        let questionOptionalExpenses = optionalExpenses[i].value;
        appData.optionalExpenses[i] = questionOptionalExpenses;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

buttonCalculate.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        daybudgetValue.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.mounthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;

        appData.mounthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};