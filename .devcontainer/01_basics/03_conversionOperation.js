let score = "Sujeet"
// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// "true" => 1; false => 0

let isLoggedIn = "Sujeet"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Sujeet" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// Conversion is really easy you'all
// Just assign a variable then assign another variable & = what you want to convert it into (1st variable)


// ********************Operations********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%3); used mostly

let str1 = "Hello"
let str2 = " sujeet"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log( 1 + "2");  
// console.log( "1" + 2 + 2);          // if string is first then all will be treated as string
// console.log( 1 + 2 + "2");          // if string is last then first operation will be done then it'll come to string
// console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100 
++gameCounter;                   // prefix & postfix
console.log(gameCounter);
