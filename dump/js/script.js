//UNIT 3. ОПЕРАТОР IF, ELSE, SWITCH CASE - ВЫБОР В JAVASCRIPT (UPDATE 2021-05-12)

//1. При нажатии кнопки .b-1 срабатывает функция f1. Функция должна прочитать содержимое .i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в .out-1.

const btn = document.querySelector('.b-1');
const input = document.querySelector('.i-1');
const out1 = document.querySelector('.out-1')
btn.onclick = function f1() {
    let num = +input.value;
    if (num == 4) {
        out1.innerHTML = 'true';
    } else {
        out1.innerHTML = 'false';
    }
}

// 2. Даны две переменные a21 и a22. При нажатии кнопки .b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в .out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 22;
let a22 = 9;
const btn2 = document.querySelector('.b-2');
const out2 = document.querySelector('.out-2');

btn2.onclick = function f2() {
    if (a21 > a22) {
        out2.innerHTML = a21;
    } else {
        out2.innerHTML = a22;
    }
}

// // 3. Даны 2 input - .i-31 и .i-32, оба - input[type=number]. При нажатии кнопки .b-3 срабатывает функция f3. Функция должна сравнить числа из input, вывести в .out-3 большее число.
// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

const input1 = document.querySelector('.i-32');
const input2 = document.querySelector('.i-33');
const btn3 = document.querySelector('.b-3');
const out3 = document.querySelector('.out-3');

btn3.onclick = function f3() {
    let num1 = +input1.value;
    let num2 = +input2.value;
    if (num1 > num2) {
        out3.innerHTML = num1;
    } else {
        out3.innerHTML = num2;
    }
}

// 4. Пользователь вводит в .i-4 год своего рождения. Есть кнопка .b-4 которая запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

const input3 = document.querySelector('.i-4');
const btn4 = document.querySelector('.b-4');
const out4 = document.querySelector('.out-4');

btn4.onclick = function f4() {
    let currentYear = (new Date()).getFullYear();
    let bornYear = +input3.value;
    let result = currentYear - bornYear;
    if (result >= 18) {
        out4.innerHTML = 1;
    } else {
        out4.innerHTML = 0;
    }
}

// 5. На странице есть input c классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ 'm' если число меньше нуля, 0 если число равно нулю и число 1 если больше.

const input5 = document.querySelector('.i-5');
const btn5 = document.querySelector('.b-5');
const out5 = document.querySelector('.out-5');

btn5.onclick = function f5() {
    let value = +input5.value;
    if (value < 0) {
        out5.innerHTML = 'm';
    } else if (value == 0) {
        out5.innerHTML = 0;
    } else {
        out5.innerHTML = 1;
    }
}

// 6. На странице есть input с классом i-6, куда пользователь может ввести число. Есть кнопка .b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю - четное, нет - нечетное.

const input6 = document.querySelector('.i-6');
const btn6 = document.querySelector('.b-6');
const out6 = document.querySelector('.out-6');

btn6.onclick = function f6() {
    let value1 = +input6.value;
    if (value1 % 2 == 0) {
        out6.innerHTML = 'even';
    } else {
        out6.innerHTML = 'odd';
    }
}

// 7. Даны 2 input - .i-71 и .i-72, оба - input[type=number]. При нажатии кнопки .b-7 срабатывает функция f7. Функция должна число из .i-71 возвести в степень .i-72, вывести результат в .out-7. Для возведения в степень можно использовать **, или Math.pow.

const input71 = document.querySelector('.i-71');
const input72 = document.querySelector('.i-72');
const btn7 = document.querySelector('.b-7');
const out7 = document.querySelector('.out-7');

btn7.onclick = function f7() {
    let num1 = +input71.value;
    let num2 = +input72.value;
    let result = Math.pow(num1, num2);
    out7.innerHTML = result;
}

// 8. Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с 1, 2, 3. И если число выбрано - 1, то вывести в .out-8 строку one, если 2 - two, если 3 - three. Напоминаю - это программирование. Как указано в задании - так и выводим. Т.е. Three с большой буквы - ошибка!!!

let select = document.querySelector('.s-8');
let index = select.options.selectedIndex;
let text = select.options[index].text;
let value = select.options[index].value;
const btn8 = document.querySelector('.b-8');
const out8 = document.querySelector('.out-8');
console.log(text);

btn8.onclick = function f8() {
    let val = +select.value;
    switch (val) {
        case 1:
            out7.innerHTML = 'one';
            break;
        case 2:
            out7.innerHTML = 'two';
            break;
        case 3:
            out7.innerHTML = 'three';
    }
}

// function test (){
//     let txt = +text;
//     let val = value;
//     alert('текст = ' + txt + ',' +' значение = ' + val ); 

// }

//9. Есть input с классом .i-9, куда пользователь может ввести номер квартиры. Есть кнопка .b-9 которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.
//
// если от 1 включительно до 32 включительно - то вывести цифру 1
// если от 33 (включительно) до 43(включительно) - то вывести 2
// если от 44(включительно) до 64 (всключительно) - то 3
// В противном случае, вывести 0.

let input9 = document.querySelector('.i-9 ');
let btn9 = document.querySelector('.b-9 ');
let out9 = document.querySelector('.out-9 ');

btn9.onclick = function f9() {
    let value = +input9.value;
    if (value >= 1 && value <= 32) {
        out9.innerHTML = 1;
    } else if (value >= 33 && value <= 43) {
        out9.innerHTML = 2;
    } else if (value >= 44 && value <= 64) {
        out9.innerHTML = 3;
    } else {
        out9.innerHTML = 0;
    }
}

//10. Дан select .s-100. По нажатию кнопки, выведите value выбранного option в .out-10.

function myFunction() {
    let value100 = document.getElementById("s-100").value;
    document.getElementById("out-10").innerHTML =value100;
}

//11.

