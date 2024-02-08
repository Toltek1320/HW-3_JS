
/*
Задание 1 
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3^3 степени
*/

function cube(num) {
    return num ** 3;
 
 }
 console.log('Результат', cube(2) + cube(3));


/*Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

function salary() {
    const sal = prompt('Введите число: ');

    if (isNaN(sal)) {
        alert('Вы ввели текст! Попробуйте ещё раз!');
        salary();
    } else {
        const result = sal * 0.87
        console.log(`Размер заработной платы за вычетом налогов равен ${result}`);
    }
}
salary();

/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/
function maxNumber() {
    const num1 = Number(prompt(`Введите 1-ое число: `));
    const num2 = Number(prompt(`Введите 2-ое число: `));
    const num3 = Number(prompt(`Введите 3-е число: `));

    const maximum = Math.max(num1, num2, num3);
    return maximum;
}
const result =  maxNumber();
alert(`Максимальное число из введенных  ${result}`);


/*Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть 
из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/
function sum(a, b) {
    return a + b;
}
function diff(a, b) {
    if (a < b){
        return b - a;
    } else if (a === b){
        return 0;
    } else {
        return a - b;
    }
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    if (operation === '+') {
        return sum(arg1, arg2);
    } else if (operation === '-') {
        return diff(arg1, arg2);
    } else if (operation === '*') {
        return mul(arg1, arg2);
    } else if (operation === '/') {
        return div(arg1, arg2);
    }
    return NaN;
}

const numA = +prompt(`Введите число А: `);
const numB = +prompt(`Введите число B: `);
const operation = prompt(`Введите знак операции (+, -, *, /): `);
alert(`Результат: ${mathOperation(numA, numB, operation)}`);
