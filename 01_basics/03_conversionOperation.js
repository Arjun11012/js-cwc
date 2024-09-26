let score = "arjun" //false //true //undefined //null //"33abc" //"33" //33

// node 01_basics/03_conversionOperation.js
//NaN = Not a Number //special type

// const {score} = req.body // frontend se request lena

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) //every data types has its capital format , this is the concept of class based 
console.log(typeof valueInNumber); // let score = "33" output number // "33abc"
console.log(valueInNumber);


// now for score = null   output 0
// now for score = undefined output NaN


// "33" => 33
// "33abc" => NaN but type is number
// true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "arjun" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



