// null vs undefined

var count = null;
console.log(count);
console.log(typeof null);

var d;
console.log(d);
console.log(typeof undefined);

console.log(null == undefined);
console.log(null === undefined);

// Switch - case

let a = 12;
let b = 12;

if (b == a) {
    console.log('b 12 ye beraberdir');
}
else {
    console.log('b 12 den ferqlidir');
}

// Conditional operator

let animal = 'bird'

switch (animal) {
    case 'cat':
        console.log('Your pet is cat');
        break;
    case "dog":
        console.log("Your pet is dog");
        break;
    case "bird":
        console.log("Your pet is bird");
        break;
    default:
        console.log('Your pet is not undefined');
}


let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

document.getElementById("demo").innerHTML = "Today is " + day;

// Loops - Donguler

// for dongusu

for (var i = 0; i < 10; i++) {
    console.log(i);
}

const myArray = ['ilkin', 'anar', 'nermin']

for (var f = 0; f < myArray.length; f++) {
    console.log(myArray[f]);
}


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}


// while dongusu


// first example
let num = 0

while (num < 10) {
    num++
    console.log(num);
}

// second example
let counter = 0;
while (counter < 20) {
    counter++;

    if (counter == 15) {
        continue;
    }
    console.log(counter);
}