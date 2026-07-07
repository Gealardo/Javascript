// function sayMyname(){
//  console.log("a")
//  console.log("y")
//  console.log("u")
//  console.log("n")
// }

// //sayMyname ->reference
// sayMyname()

function add(num1,num2){
  console.log(num1+num2) // return num1+num2
}

add(1,3)
add(1,"3")

function emptyAurrgument(num1){
  // if(num1 === undefined){
  //   console.log("please pass the argument")
  //   return
  // }
  return num1;
}
console.log(emptyAurrgument())  //undefined


// function calculatePrices(...prices){  //rest operator
//   return prices
// }
// console.log(calculatePrices(10,20,30))

function calculatePrices(price1,...prices){  //rest operator
  return  prices        //    price1=10
}
console.log(calculatePrices(10,20,30))

//pass object in function
const handleObject={
  username : "gealardo",
  age : 25
}
function objectPass(anyobject){
     console.log(`usename is ${anyobject.username} and age is ${anyobject.age}`)
}
objectPass(handleObject)
//or
objectPass({
   username :"vikash",
   age:38

})


//pass arrays in function....