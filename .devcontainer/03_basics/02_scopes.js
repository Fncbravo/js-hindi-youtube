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

function addone (num) {
    return num + 1
}

addone(5)
