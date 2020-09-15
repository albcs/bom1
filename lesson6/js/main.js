let startButton = document.querySelector('#start'); // Кнопка "Начать расчет"

let budgetValue = document.querySelector('.budget-value'); // Блок правой части программы
let daybudgetValue = document.querySelector('.daybudget-value'); // Блок правой части программы
let levelValue = document.querySelector('.level-value'); // Блок правой части программы
let expensesValue = document.querySelector('.expenses-value'); // Блок правой части программы
let optionalexpensesValue = document.querySelector('.optionalexpenses-value'); // Блок правой части программы
let incomeValue = document.querySelector('.income-value'); // Блок правой части программы
let monthsavingsValue = document.querySelector('.monthsavings-value'); // Блок правой части программы
let yearsavingsValue = document.querySelector('.yearsavings-value'); // Блок правой части программы

let expensesItem = document.querySelector('.expenses-item'); // Блок обязательных расходов
let buttonApprove = document.querySelector('button')[0]; // Кнопка "Утвердить блока обязательных расходов"
let buttonApproveOptional = document.querySelector('button')[1]; // Кнопка "Утвердить блока необязательных расходов"
let buttonCalculate = document.querySelector('button')[2]; // Кнопка "Рассчитать"

let optionalExpenses = document.querySelectorAll('.optionalexpenses-item'); // Блок необязательных расходов

let chooseIncome = document.querySelector('.choose-income'); // Блок статей возможного дохода
let savings = document.querySelector('#savings'); // Чекбокс "Есть ли накопления: "
let chooseSum = document.querySelector('.choose-sum'); // Поле "Сумма"
let choosePercent = document.querySelector('.choose-percent'); // Поле "Процент"
let yearValue = document.querySelector('.year-value'); // Поле "Год"
let monthValue = document.querySelector('.month-value'); // Поле "Месяц"
let dayValue = document.querySelector('.day-value'); // Поле "День"
