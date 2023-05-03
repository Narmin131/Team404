let a = null;
console.log(a);
console.log(typeof a);
// typeof null ---  object


let b;
console.log(b);
console.log(typeof b);
// typeof undefined --- undefined


console.log(a == b);
console.log(a === b);


// console.log( 20 == '20'); -- true
// console.log( 20 === '20');  -- false
// console.log( 20 === 20);  -- true


// Functions - Funksiyalar


// IIFE functions
// Immediately Invoked Functions Expression
(function () {
    console.log('IIFE functions');
})()


// function name(parameter, parameter) {
//     // code 
// }


// Es 5 - Ecmascript 5 function

function hello() {
    console.log('This is a function');
}

hello()

// Es6 - Ecmascript 6 function - Arrow function

const newFunc = () => {
    console.log('This is a arrow function');
}
newFunc()

// Function declaration
function text() {
    console.log('Function declaration');
}
text()

// Function expression
const myFunc = function () {
    console.log('Function expression');
}
myFunc()


function sum(a, b) {
    console.log(a + b);
}
sum(12, 9)


const sumNumbers = (c, d) => {
    console.log(c - d);
}
sumNumbers(20, 4)

function greet(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}
greet("Steve", "Jobs");

function myFunction(g1, g2) {
    return g1 / g2;
}
const value = myFunction(8, 2); // Calling the function
console.log(value);


function calcAddition(number1, number2) {
    return number1 + number2;
}
console.log(calcAddition(6, 9));


const square = function (number) {
    return number * number;
};
const x = square(4); // x gets the value 16
console.log(x);
