let mydate=new Date();

console.log(`mydate ${mydate}`);
console.log(`date:toDatestring ${mydate.toDateString()}`);
console.log(`date:toISOString ${mydate.toISOString()}`);
console.log(`date:toLocaleDateString ${mydate.toLocaleDateString()}`);
console.log(typeof mydate);

// my created date

// let myCreatedDate=new Date(2026 , 1,4);
// let myCreatedDate=new Date('2004-11-14');
// let myCreatedDate=new Date('01-14-2004');
  let myCreatedDate=new Date(2004,10,14);
console.log(myCreatedDate.toLocaleString());

// let myTimeStamp=Date.now();
// console.log(myTimeStamp);

console.log(Math.floor(Date.now()/10000))

console.log(mydate.getMonth() + 1);

console.log( mydate.toLocaleString('default',{
    weekday: "long"
   }
       )
      
  )  