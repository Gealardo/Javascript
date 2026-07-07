let a=10
const b=20
var c =30  // don't use further

if(true){
  // ALL GLOBAL VARIABLE CAN BE ACCESSED INSIDE THE BLOCK 
  // BUT VARIABLE THAT ASSIGNED OR INITIALIZED INSIDE CAN NOT BE ACCESSED OUTSIDE 
  let a=100
  const b=200
  var c =300  // UPDATED GLOBALY

  // INSIDE PRIORITY IS OF VARIABLE ASSIGNED OR INITIALIZED HERE ...
console.log("INNER",a)
console.log("INNER",b)
console.log("INNER",c)

}

console.log(a)
console.log(b)
console.log(c)


function one(){
  let username="gealardo"
  function two(){
     let password="!@#$"
    console.log(`username is ${username} and password ${password}`)
  }
  // console.log(password)// error
  console.log(username)
  two()

} 
 // two()                   //error
// console.log(username)  //error

one()

//--------------two type function making---

Standered(); 

function Standered(){
  console.log("classic way , can we called anywhere in its valid scope")
}


//Variable();
const Variable=function(){

   console.log("function as variable"); 
 
}
Variable();