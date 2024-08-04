// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5 ]

for (const num of arr) {
    // console.log(num);                               // For of loop
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps  --   key-Value pairs

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of ")
map.set('FR', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    game1: 'NFS',
    game2: "GOW",
}

// for (const [key,value] of myObject) {             // for of does not work with object
//     console.log(key, ':-', value);
// }

