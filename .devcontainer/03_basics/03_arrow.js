const user = {
    username: "sujeet",
    price: 999,

    welcomeMessage: function() {                                     // (this.)  CURRENT CONTEXT      ( refers to the current context)
        console.log(`${this.username} , welcome to website`);
        console.log(this);

    }
 
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// THIS WAS ALL PREREQ

// ++++++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++

// function chai() {
//     let username = "sujeet"
//     console.log(this.username);                NOT ABLE TO USE THIS IS FUNCTION BUT WAS ABLE TO USE IN OBJECTS
// }

// chai()

// const chai = function () {
//     let username = "sujeet"
//     console.log(this.username);
// }

const chai =  () => {                            // ARROW FUNCITON DECLARED 
    let username = "sujeet"    
    console.log(this);
}
   

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                               // explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2          // implicit return

// const addTwo = (num1, num2) =>  (num1 + num2)           // curly braces wrap, you have to write return and not with paranthesis 

const addTwo = (num1, num2) =>  ({username: "sujeet"})           // curly braces wrap, you have to write return and not with paranthesis 


console.log(addTwo(2, 2))


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()    
