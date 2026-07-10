// syntax of promise creation and consumption

const promiseOne=new Promise(function(resolve, reject){
  
  setTimeout(function(){
    console.log("task one ")
    resolve()
  },1000)

})

//promises consume
promiseOne.then(function(){
  console.log("task one done")
})


// syntax 2 for creation and consumption of promises

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("task 2")
    resolve()
  },1000)
}).then(function(){
  console.log("task 2 done")
})

// passing data after doing task
const promiseTree=new Promise(function(resolve,reject){
  setTimeout(function(){
       console.log("task three")
       resolve({username: "ayun", password:'123'})
   
  },1000)
})
//get data 
promiseTree.then(function(userinfo){
    console.log("task three data ",userinfo)
})

// if task done or failed
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
      let error=true
      if(!error){
       resolve({username:'gealardo'})
      }else{
        reject('error : something went wrong')
      }
    },1000)
})
promiseFour
.then(function(userdata){
  console.log(userdata)
  return userdata.username
})
.then(function(username){
   console.log(username)
})
.catch(function(error){
   console.log(error)
})
.finally(function(){
  console.log("finnaly promise fullfilled either data or error")
})


//there is two ways to consume promises
// 1) use .then(for chaining .then.then)->for promise resolve ,.catch for promise reject and then finally promise done 
// 2) async [try->await,catch->error handel]
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
      let error=true
      if(!error){
       resolve({username:'GEALARDO'})
      }else{
        reject('error : JS  went wrong')
      }
    },1000)
})
// if you are confirmed that there will not be error
// async function consumePromiseFive(){ 
//   const userdata=await promiseFive 
//   console.log(userdata)
// }

// consumePromiseFive()

//otherwise handle by try,catch
async function consumePromiseFive(){
    try {
       const userdata=await promiseFive 
       console.log(userdata)
    } catch (error) {
      console.log(error)
    }
}

consumePromiseFive()