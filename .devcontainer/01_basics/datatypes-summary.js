// # Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100 
const scoreValue = 100.3

const inLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol("123")

console.log(id == anotherId);

// const bigNumber = 3497658479379697797964n      // represent bigInt by n

// Reference (Non primitive)

// Array, Objects, Funtions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "sujeet",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non Primitive)

let myYoutubename = "Serrioton"

let anothername = myYoutubename
anothername = "FNCBravo"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sujeet@google.com"

console.log(userOne.email);
console.log(userTwo.email);
