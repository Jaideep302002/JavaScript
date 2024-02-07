function myName(){
    console.log("J");
    console.log("A");
    console.log("I");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("p");
}

//SmyName()

//function addtwoNumbers(num1,num2){
  //  console.log(num1+num2);
//}

function addtwoNumbers(num1,num2){
    return num1+num2;
}

 const result=addtwoNumbers(3,4);
 //console.log("Result is:", result);


 function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username:");
        return
    }
    return `${username} just logged in`
 }

 //console.log(loginUserMessage("Jaideep"))
 //console.log(loginUserMessage())

 function calculateCartPrice(val1, val2,...num1){
    return num1
// ... --> is the rest operator
 }

 //console.log(calculateCartPrice(200,400,500,600))


 const user={
    username: "Jaideep",
    price: 999
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }

 handleObject(user)