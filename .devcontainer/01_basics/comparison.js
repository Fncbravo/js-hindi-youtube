// console.log(2 > 1);
// console.log(2 >= 1);          // BASIC CONVERSIONS NO PROBLEMS AT ALL
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// problem arises when you don't compare same datatype

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);   // here null is converted into 0 i.e it comes as true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

console.log("2" === 2);

// This type of comparisons should be avoided for clean code. (from 12 - 22)
