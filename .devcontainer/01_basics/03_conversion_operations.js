let score ="Anushka";
console.log(typeof(score));
console.log(typeof score);

let newVar = Number(score);
console.log(typeof newVar);
console.log(newVar);


// "33" => 33
// "33abs" => NaN
// true => 1  , false => 0

let Isloggedin = 0;
let booleanIsloggedin = Boolean(Isloggedin);
console.log(typeof(booleanIsloggedin));
console.log(booleanIsloggedin);

// for a empty string ("") the output will be false .
//for a string ("Anushka") output will be true.

/*************************************** Operations*********************************/
 let str1 = "Anushka";
 let str2 = "Singhal";
 let str3 = str1 + " " + str2 
 console.log (str3);

 console.log("1" + 2);
 console.log(1 + "2");
 console.log("1" + 2 + 2);  // priority will be a string
 console.log(1 + 2 + "2");  // priority will be a number
