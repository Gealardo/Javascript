/*
The class keyword (added in ES6/2015) is syntactic sugar. 
It looks like classical OOP, but under the hood, JavaScript still uses prototypes. 
It's just easier syntax.

So is JS really OOP?
Yes, but differently. It follows OOP principles:
 1 Encapsulation (data + methods in objects)
 2  Inheritance (via prototypes)
 3 Polymorphism (objects can take many forms)
 4 Abstraction (hiding complexity)

Under the hood, JavaScript is fundamentally a prototype-based language.
*/

//object littral

const user={
   username: 'gealardo',
   password: 123,

   getuserinfo : function(){
     // console.log(username) // error : which username ->e.g Monday there are so many
     console.log(`username: ${this.username}`) // this saying monday of this week(username of this user)

     // what ' this ' acctully contains
     console.log(this)
   }

}
console.log(user['username'])

console.log(user.getuserinfo())

console.log(this)// global context here empty but (different for browser)
//for many user its not possible to make diff object 

//constructor function ->new make the separate fresh copy 

function User(username , password){
  this.username=username
  this.password=password

  return this //optional (by default it returns)
}

/*
const user1=User('gea',12)
//console.log(user1)// user one get printed
const user2=User('ayun',13) // overwrited in user1
console.log(user1)  // still user2 get printed

*/
const user1=new User('gea',23)
const user2=new User('edda',43)
console.log(user1)
console.log(user2)  // overwriting froblem solved  with constructor (new)