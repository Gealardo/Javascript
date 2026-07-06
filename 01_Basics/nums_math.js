"use strict";

console.log("-----NUMBERS-----");

const score=500;
console.log(score);

const score2=new Number(100);// spacialy a number
console.log(score2);

console.log(score2.toString());   //converting to string 
console.log(typeof score2.toString());//string

console.log(score2.toString().length);// now string lenght

console.log(score2.toFixed(3));  // upto 3 decimal places

const score3=233.89
console.log(score3.toPrecision(3)); //round of up to 3 significant digit


const num=1000000
console.log(num.toLocaleString("en-IN"));// for just representation // comma add kar deta h

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);





console.log("-----MATHS----");// by default library...
//Math
console.log(Math);

//abs
console.log(Math.abs(8-10));

//round
console.log(Math.round(23.445));

//ceil
console.log(Math.ceil(23.445));

//floor
console.log(Math.floor(23.445));

//random // gives between 0 to 1;
console.log(Math.random());

//using random ->get the values between your boundery
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min))