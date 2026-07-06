const tinderUser= new Object()

console.log(tinderUser)
// OR

const tinderUser2 = {}

console.log(tinderUser2)

const user1={}
user1.id= "46273"
user1.password="123ayu"

user1.fullname={
  fullNaam :{
    firstName :"Gealardo",
    lastName : "Thon"
  }
}

console.log(user1)
console.log(user1.fullname.fullNaam)
console.log(user1["fullname"])

// merge two obj
const obj1={1:"a",2:"b",3:"c"}
const obj2={6:"1",7:"2",8:"3"}  //keys should be diffrent

const merge1={obj1,obj2}
console.log(merge1)

const merge2=Object.assign({} , obj1 , obj2)
console.log(merge2)

const merge3={...obj1,...obj2}
console.log(merge3)


console.log(Object.keys(user1))

console.log(Object.values(user1))

//hasOwnproperty
//array [{},{}] object