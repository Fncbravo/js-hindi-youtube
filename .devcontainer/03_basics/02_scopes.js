// var c = 300

{}         // scope

let a = 300

if(true) {
    let a = 10
    const b = 20                   // THIS IS BLOCK SCOPE & OUTSIDE IS GLOBAL SCOPE
console.log("INNER: ", a);
}
 
console.log(a);
// console.log(b);
// console.log(c);

// Node global scope & global scope inn console in browser are both different

// NESTED SCOPES

function one() {
    const username = "sujeet"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    // two()

}

// one()

if (true) {
    const username = "sujeet"
    if (username === "sujeet") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++

console.log(addone(5))

function addone (num) {
    return num + 1                      // we can see functions getting declared by this common wway and another way also 
    
}


addTwo(5)
const addTwo = function(num) {
    return num + 2                        ;// this is the another way to declare fucntins in variables.
}


//  error occurs when you declare a function in variable & try to execute it before.
// we will learn hoisting concept how funtions are declarerd & stored & execution context etc.
