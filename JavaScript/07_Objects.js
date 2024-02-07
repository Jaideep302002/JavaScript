
//singleton
//Object.create()

//Object literals

 const mysum = Symbol("key1") 
const JsUser={
    name: "Jaideep",
    "full name": "Jaideep Singh",
    [mysum]: "mykey1",
    age: 18 ,
    location : "Jaipur",
    email : "singhjaideep79806@gmail.com",
    isLoggedIn:false,
    lastLogginsdays:["saturday" , "sunday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mysum])

JsUser.email = "jaideep.chatgpt.com"//used to override the value
//Object.freeze(JsUser)//not to change any value 
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");

}

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);//this use to refer to the value of the above method 

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
