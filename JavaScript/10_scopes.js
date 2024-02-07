

// {} --> scope  : if it comes with if else,loops
  let a=200
if(true){
  let a= 10
  const b= 20

  //console.log("inner:" ,a)
}


//console.log(a)
//console.log(b)


/**********nested scope****** */
function one(){
    const username="jaideep"

    function two(){
        const website="youtube"
        console.log(username);
    }
          //console.log(website)

    two()
}

  //one()


  if(true){
    const username="Jiadeee"
    if(username === "Jiadeee"){
        const website=" youtube"
        //console.log(username+website);
    }

    //console.log(website)
  }

  //console.log(username)


  //**********interesting*********** */

  function addone(num){
    return num+1
  }

addone(5)

const addTwo=function(num){
    return num+2

}
addTwo(5)