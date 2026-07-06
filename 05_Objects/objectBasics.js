// singleton->when object made by constructor.(constructor.create)


// literate method 

// make a symbol
const mySymbol=Symbol("my key");

const userOne={

    name         :"ayun" ,// "name" by default is string
    userpassword :1234,
    userName     :'Gealardo',
    userId       :980    ,
    Isloggedin   :false  ,
    daysActive   :['mon','tue'],
    "Geal Ardo"  :"user's name", 
    [mySymbol]     : "mykey", // [ ]

}

// how to access keys from object
console.log(userOne.name);
console.log(userOne["name"]);
console.log(userOne["daysActive"])

console.log(userOne["Geal Ardo"]) // can be only accessed by this method not by dot.
console.log(userOne[mySymbol])  // No " ".

//updating key's value
userOne.userpassword=788735
console.log(userOne["userpassword"])

// No further updation will reflect

// Object.freeze(userOne)
// userOne.userpassword="ayunnnnnn"
// console.log(userOne["userpassword"])  //no update will shown

userOne.greeting = function(){
  console.log("hello, user ");
}
console.log(userOne.greeting())

userOne.greeting2 = function(){
  console.log(`hello, ${this.name} `);
}
console.log(userOne.greeting2())


