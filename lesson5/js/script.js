let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');

menu.insertBefore(menuItem[2], menuItem[1]);

menuItemNew = document.createElement("li");
menuItemNew.classList.add("menu-item");
menuItemNew.textContent = "Пятый элемент";
menu.appendChild(menuItemNew);

let backGround = document.querySelector('body');
backGround.style.backgroundImage = 'url(../img/apple_true.jpg)';

let title = document.querySelector('.title');
title.textContent = "Мы продаем только подлинную технику Apple";

let commercial = document.querySelector('.adv');
commercial.remove();

let appleAnswer = document.querySelector('.prompt');
let whatDoYouThink = prompt('Ваше отношение к технике Apple?', '');
appleAnswer.textContent = whatDoYouThink;