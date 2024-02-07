const accountId=122334455
let accountEmail="jaideep@gmail.com";
var accountPassword="12345";
accountCity = "Jaipur";

//accountId =2//not allowed
accountEmail="hc@hc.com";
accountPassword="12";
accountCity="Banglore";
console.log(accountId);

/*  Note:!! Prefer not to use var because of block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity]);