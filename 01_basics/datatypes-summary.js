/*
primitive and non-promitive datatypes
concept of call by value and call by refernce
how data is stored and access for this datatypes
*/

// # Primitive/ basic

// 7 types : String, Number, Boolean, null(temperature eg), undefined, Symbol( to make a value special as in react making components), BigInt

// Is Java-Script a Dynamically type language or Statically type language ?

const score = 100 // cousin of js is ts typescript // const score:number = 100 // type safety
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // let userEmail = undefined; // manul assingning value

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456789983847832936757565775n  // bigInt


// Reference (Non-primitive)

// Array, Objects, Functions

// master JS Objects and Browser Events to attain sole mastery in JS

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "arjun",
    age: 23,
}

const myFunction = function(){
    console.log("Helllo World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction); // datatype is object function 
console.log(typeof heros); // datatype is function 
console.log(typeof anotherId); // datatype is symbol

// link to study
// https://262.ecma-international.org/5.1/#:~:text=ECMAScript%20operators%20include%20various%20unary,operators%2C%20and%20the%20comma%20operator.
// article : the types of Operator

