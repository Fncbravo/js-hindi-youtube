//         Strings

const name = "sujeet"
const repoCount = 50

console.log(name + repoCount + " Value");

// FOLLOW THIS SYNTAX ASAP (BACKTICKS)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// String Interpolation
 
const gameName = new String('sujeet-nd')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "    sujeet    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sujeet.com/sujeet%20baisane"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

// PRACTICE STRING 
