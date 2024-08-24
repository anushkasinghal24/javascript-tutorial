const account_Id = 112233
let account_Email = "anushkasinghal233@gmail.com"
var account_password = "123445"
account_city = "Jaipur"
let account_state;   // The output of this code will be undefined because it do not have any value 

//account_Id=2; //Not Allowed // const variable can't be changed 
account_Email = "as@gmail.com"
account_password="456"
account_city="Hyderabad"
console.log(account_Id);
console.table([account_Email,account_Id,account_password,account_city])

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
