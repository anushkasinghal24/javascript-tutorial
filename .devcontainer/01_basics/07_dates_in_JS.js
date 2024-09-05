let myDate = new Date();
// console.log(myDate.toDateString);
// console.log(myDate.toISOString);
// console.log(myDate.toString);
// console.log(myDate.toJSON);
// console.log(myDate.toLocaleString);
// console.log(typeof myDate);

let myCreatedDate = new Date(2024,0,23)
console.log(myCreatedDate.toDateString());
let myCreatedDated = new Date("01-14-2024")
console.log(myCreatedDated.toLocaleString());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long"
})
