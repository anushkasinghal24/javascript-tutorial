  function saymyNAme(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("K");
    console.log("A");
  }
  //return saymyNAme()

  function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result;
    
  }
  const result = addTwoNumbers(1,2);
  //console.log("Result: ",result);

  function loginUserMessage(username){
    return `${username} just logged in`
  }
  //console.log(loginUserMessage("Anushka"))

  function calculateCartPrice(val1, val2, ...num1){
    return num1
  }
  console.log(calculateCartPrice(200,400,500,2000))

  const user = {
    usserName : "anushka",
    price : 199
  }
  function handleObject(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`)
  }
  //handleObject(user)

  handleObject({
    username:"Anushka",
    price:399
  })

  const myNewArray = [200,300,400,500]
  function returnSecondValue(getArray){
    return getArray[1]
  }
  console.log(returnSecondValue(myNewArray)); 