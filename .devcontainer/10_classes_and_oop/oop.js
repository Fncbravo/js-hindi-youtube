const user = {
    username: "sujeet",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
    //    console.log("Got user details from database");
    //   console.log(`Username: ${this.username}`);
      console.log(this);
    
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//  constructor => new
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome: ${this.user}`);
        
    }
    return this
}

const userOne = new User("sujeet", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);
