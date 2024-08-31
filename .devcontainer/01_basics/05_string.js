const name ="Anushka"
const repoCount = 30

//console.log(name + repoCount + "Value");

console.log(`Here is my name ${name} and my repo count is ${repoCount}`);

const gameName = new String(`Anushkaa is my name `)
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


// It is used to write the substrings by using their index values
const newString = gameName.substring(0,4)
console.log(newString);
// slice method takes the negative index value
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
// trim method is used to remove the starting and ending spaces
const newStringOne= "       Anushka      "
console.log(newStringOne);
console.log(newStringOne.trim());

// It is used to replace the string
const url = "anushka@gla.ac.in"
console.log(url.replace('anushka', 'singhal'));
// include is used to check that the given string is present in the code or not 
console.log(url.includes('singhal'))
// split method is used to convert the string into arrays.
console.log(gameName.split(' '))



