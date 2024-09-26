const name = "Arjun"
const repoCount = 4

// console.log(name + repoCount + " Value");  // not good way to concatenate // don't use this

// modern way of syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // ` ` called as backsticks // string interpolation // placeholder ke variable me inject karna

// // another way of declaration of String
// const gameName = new String('arjun-khadse') // new is a keyword for using object and constructor is in ()

const gameName = new String('arjun-khadse-1101') 

// console.log(gameName[4]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('k'));


// go through all method via using browser console and try understanding all the mehtods for interview preparation also can use mdn.

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "    arjun    "
console.log(newString1);
console.log(newString1.trim());  // trim javascript mdn

const url = "https://arjun.com/arjun%20khadse"
console.log(url.replace('%20', '-'))
console.log(url.includes('say'))

console.log(gameName.split('-'));







