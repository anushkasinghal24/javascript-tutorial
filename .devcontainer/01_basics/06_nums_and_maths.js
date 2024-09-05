const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber= 23.8966;

console.log(otherNumber.toPrecision(3));
const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++

 console.log(Math);
// console.log(Maths.abs(-4)); 
// console.log(Maths.round(4.7));
// console.log(Maths.ceil(4.7));
// console.log(Maths.floor(4.7));
// console.log(Maths.min(4,6,9,3,4));
// console.log(Maths.max(4,8,7,3,6));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max =  20;

console.log(Math.floor(Math.random()*(max-min +1))+ min);





