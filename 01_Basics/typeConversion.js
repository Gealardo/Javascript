//NaN confution
let x="8a";
console.log(x);
console.log(typeof x); //same this as method
console.log(typeof(x));// method 
let valueInnumber=Number(x);
console.log(typeof(valueInnumber)); //converted to number datatype
// now number is Not a Number---
console.log(valueInnumber);



console.log("------------------------------");

// null it get converted to 0;
 x=null;
console.log(x);
console.log(typeof x); //same this as method
console.log(typeof(x));// method 
 valueInnumber=Number(x);
console.log(typeof(valueInnumber)); //converted to number datatype

console.log(valueInnumber);

console.log("-----------------------------");

 x=undefined;
console.log(x);
console.log(typeof x); //same this as method
console.log(typeof(x));// method 
 valueInnumber=Number(x);
console.log(typeof(valueInnumber)); //converted to number datatype
// now number is Not a Number---
console.log(valueInnumber);

console.log("-----------------------------");

 x=true;
console.log(x);
console.log(typeof x); //same this as method
console.log(typeof(x));// method 
 valueInnumber=Number(x);
console.log(typeof(valueInnumber)); //converted to number datatype

console.log(valueInnumber);

console.log("-----------------------------");

 x="xyz";
console.log(x);
console.log(typeof x); //same this as method
console.log(typeof(x));// method 
 valueInnumber=Number(x);
console.log(typeof(valueInnumber)); //converted to number datatype
// now number is Not a Number---
console.log(valueInnumber);

console.log("-----------------------------");

//conver to Bollean;
let y=undefined;
console.log(typeof y);
console.log(Boolean(y));
// "" empty false 
//"noempty" true
//0=> false ; number!= 0 ==>true ; null=>false ; undefined =>false