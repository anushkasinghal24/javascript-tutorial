const myArr = [0,1,2,3,4,4]
const myHeroes = ["shaktiman","Naagraj","Sushila"]
console.log(myArr[5]);


//Array Methods

myArr.push(7)
myArr.push(8)
myArr.pop() // Removes the last Element
myArr.unshift(9) //Add the element in starting
myArr.shift() // Removes the first element 


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr);

const newArr = myArr.join() // Convert the array into String
console.log(newArr);
console.log(typeof(newArr));


// Slice , Splice 
console.log("A", myArr);

const myN1 = myArr.slice(1,4) // Slice - It do not inclued the last range (ex-4)
console.log(myN1);
console.log("B",myArr);

const myN2 = myArr.splice(1,4)// Splice - It includes the last range (ex-4)
console.log(myN2);
console.log("C",myArr); // It changes the original array , those points which we have given they will remove form the original array 

