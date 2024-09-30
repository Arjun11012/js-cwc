const score = 400
console.log(score);

const balance = new Number(100) //explicitly defining // new object which is a number type
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // precision value is very big in ecommerce website then we use this method

const otherNumber = 123.8966 //23.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// use brower console 
/* 
const balance = new Number(100)
undefined
console.log(balance)
VM449:1 Number {100}
undefined
Number
ƒ Number() { [native code] }
Number.MAX_VALUE
1.7976931348623157e+308
Number.MIN_SAFE_INTEGER
-9007199254740991
*/

// ++++++++ Maths +++++++++++++
// maths library in js comes by default

// console.log(Math); // Object [Math] {}  // type in console
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // gives value bet 0 and 1
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// Math.random() * (max - min + 1)
// console.log(Math.random() * (max - min + 1));
// console.log(Math.floor(Math.random() * (max - min + 1)));
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

