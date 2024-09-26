  // var c = 300;
  let a = 300;  // Global Variable
  if(true){    
    let a = 10;     // Block Variable , these curlt brackets shows that the variable is scoped , It will not worked ouside the braces .
    const b = 20;
    console.log("Inner:",a)
  }
  console.log(a)


  function one(){
    const username = "Anushka"   // chota wala scope bade wale scope ko access kr skta hai pr  
    function two(){    
        const website = "Youtube"   // bada wala scope chote wale scope koaccess nahi karega
        //console.log(username)
    }
    console.log(website);

    two()
  }
  //one()


  if(true){
    const userName = "Anushka"
    if(userName==="Anushka"){
        const website = "Youtube"
        console.log(userName + website);
    }
    //console.log(website)
  }
  //console.log(userName);


  //++++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++
  