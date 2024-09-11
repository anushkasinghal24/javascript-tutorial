 //object  Literals

 const JsUser = {
    name:"Hitesh",
    age:18,
    mysym: "myKey1",
    location:"Morena",
    email: "anushka@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }
//  console.log(JsUser["email"]);
//  console.log(JsUser["mysym"]);

//  JsUser.email = "anushka@chatgptemail.com"
//  Object.freeze(JsUser)
//  JsUser.email = "anushka@online.com"
//  console.log(JsUser);

 JsUser.greeting = function(){
    console.log("Hello JS User");
 }
//  console.log(JsUser.greeting());

 JsUser.greetingTwo  = function(){
    console.log(`Hello JS User, ${this.name}`);
 }
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());

 