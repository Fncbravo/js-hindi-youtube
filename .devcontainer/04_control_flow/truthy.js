const userEmail = []

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Dont have User Email");
}


// falsy values 

// false, 0, -0, BigInt 0n, "" , null , undefined , NaN

// truthy values

// // "0", 'false' , " ", [] , {}, function() {}

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// false == 00      false == ''      0 == ''                           NOT THAT IMPORTANT
// ans: true        ans: true        ans: true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15 
// val1 = null ?? 10 ?? 15

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
                       

// console.log(val1);
