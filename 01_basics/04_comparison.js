// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//node 01_basics/04_comparison.js

// console.log("2" > 1); //dont compare two different datatypes
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);  // issue in value conversion

// follow clean code

/*
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false 
*/

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// == and comparison has different working syntax

// === // strict check // not only check values but also check respective datatypes too

console.log("2" === 2);
