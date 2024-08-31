// primitive Datatype (pre-defined)

// 7 Types : String, Boolean, Number, null, undefined, Symbol, BigInt 

/* JavaScript is a Dynamicallt Typed Language */

// Reference (Non-Primitive) 
//Types: Array, Object,  Functions.


const score = 100
const scoreValue = 100.3  // Datatype - Number


const isLoggedin = false
const outsideTemp = null
let uderEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid);  // output False


const bigNumber = 67794809212941921n
console.log(typeof(bigNumber))  // Datatype - bigint


const heros = ["Shaktiman","Anushak","Hello"] //Array

//Object
let myobject = {
    name:"Anushka",
    age: 19,
}
console.log(myobject)


const myfunction= function(){
    console.log("Hello world")
}


// The datatype of all non primitive datatype will be object.