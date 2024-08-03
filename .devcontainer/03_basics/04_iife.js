// Immediately Invoked Function Expression (IIFE)


(function chai () {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ()()      // Just wrap the function in paranthesis & we were using paranthesis before to call the funciton so just put that there empty
           // first one is func definition and second one is execution call 


( (name) => {
console.log(`DB CONNECTED TWO ${name}`);
} )('sujeet')           

// named iife - normal funtiino declaration
// unnamed iife without name arrow fucntion
// parameters passing - on line 13 parameters are passed
// Two iifes together -  ; semicolon expected

// iffe -- immediately executution
// Interview -- Global scope pollution causes problems so to remove that we use iife




