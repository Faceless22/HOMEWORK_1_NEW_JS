"use strict";

// 1. Напишите выражение, которое посчитает и выведет в консоль сколько секунд в 3 часах.

let sec = 3600;
let hour = 3;
console.log(sec * hour);


/* 2. Переделайте операторы в краткую форму записи для данных выражений: 
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);                                      */

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
alert(num);


// 3.  Создайте переменные a=10, b=2 и c=5. Выведите в консоль их сумму.

let a = 10, b = 2, c = 5;
console.log(a + b + c);


/* 4. Создайте переменные v=17 и n=10. Отнимите от a переменную n и результат присвойте переменной m. 
Затем создайте переменную d, присвойте ей значение 7. Сложите переменные m и d, а результат 
запишите в переменную result. Выведите в консоль значение переменной result. */

let v = 17, n = 10;
let m = v - n;
let d = 7;
let result = m + d;
console.log(result);


// 5. Создайте переменную name и присвойте ей ваше имя. Выведите в консоль фразу 'Привет, %Имя%!'.

let name = 'Denys!';
console.log('Привет ' + name);

// По новому вроде так?
let str = "Hello";
console.log(`${str} Denys!`);















