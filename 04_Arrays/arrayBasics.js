// array
// javascript arrays can contain ->* multiple datatype elements
// * resizable
// zero based indexing
//copy -> reference to same memory block (not like deep copy make separate memory block)
const arr=[10,20,30,"A"];
console.log(arr);
console.log(arr[1]);

const arr1=new Array(90,80,70,60);
console.log(arr1);
console.log(arr1.length);
//isarray
console.log(Array.isArray(arr));
console.log(Array.from('ayun'));
// console.log(Array.from(1,2,3,3)); error

let score1=100;
let score2=200;
let score3='ayun';
console.log(Array.of(score1,score2,score3));


//array methods

arr.push("B");
console.log(arr);
console.log(arr.length);

arr.pop();
console.log(arr);
console.log(arr.length);

arr.unshift(120); // add 120 in frond 
console.log(arr);
console.log(arr.length);

arr.shift(120); // remove 120 in frond 
console.log(arr);
console.log(arr.length);

console.log(arr.includes(10))

console.log(arr.indexOf(30))

// Slice , Splice
const myarr=[1,2,3,4,5,6];

console.log("A(original) : ",myarr);
console.log("Sliced portion :",myarr.slice(1,4));  //last range not included 
console.log("again (original): ",myarr)            // original arr no change

const myarr2=[1,2,3,4,5,6];

console.log("A(original) : ",myarr2);
console.log("Spliced portion :",myarr2.splice(1,4));  // last range also included
console.log("again (original): ",myarr2)              // original arrr changed now only contain rest p

// concatination of arrays

const array1=['ayun','gealardo','ayush','arsh'];
const array2=[10,20,30];

//wants to merge both arrays
// array1.push(array2);
// console.log(array1); // but here [_,_,_,[_,_]]
// console.log(array1[4][1])

let mergearray=array1.concat(array2);//for two arrays
console.log(mergearray);
//spread
const merge2=[...array1,...array2];// to merge more than 1 arrays 
console.log(merge2);

//use flat 
const array3=[1,2,[3,4,[5,6]]];
console.log(array3.flat(3)); // 3->level sq. braket have to unfold 


