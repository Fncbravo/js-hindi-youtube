// singleton            declared by constructors not by literals
// Object.create              constructor method - singleton

// object literals                  literals method

const mySym = Symbol("key1")
// How to use symbol as a key  -- interview que




const JsUser = {
    name: "Sujeet",
    "full name": "Sujeet baisane",
    [mySym]: "mykey1",                //  ---- used as a Symbol. it is a syntax
    age: 20,
    location: "Pune",
    email: "sujeet@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}                    
// how to access objects..        imp note: You access the values mostly by dot but there are some cases where we have to use square brackets.
// console.log(JsUser.email);        // not the right method
// console.log(JsUser["email"]);       // another method
// console.log(JsUser["full name"]);       // another method
// console.log(JsUser[mySym]);

JsUser.email = "sujeet@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sujeet@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
      console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
      console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
