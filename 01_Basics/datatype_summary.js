

// 1. PRIMITIVE DATA TYPES (7 Types)

// These are IMMUTABLE (cannot be changed once created)
// Stored in STACK memory (fast access, fixed size)
// Hold ACTUAL VALUES

// 1.1 Number
// - Represents both integers and floating-point numbers
// - 64-bit floating point (like double in C++)
let age = 25;
let price = 99.99;
let negative = -10;
let infinity = Infinity;      // Special value
let notANumber = NaN;         // Not a Number (result of invalid math)

console.log(" NUMBER ");
console.log(typeof age);           // "number"
console.log(typeof price);         // "number"
console.log(typeof infinity);      // "number"
console.log(typeof NaN);           // "number" (weird but true!)
console.log(0.1 + 0.2 === 0.3);    // false! (floating point precision issue)
console.log();

// 1.2 String
// - Text data, enclosed in quotes
// - Can use single quotes, double quotes, or backticks (template literals)
let name = "Gealardo";
let singleQuote = 'Hello';
let templateLiteral = `My name is ${name}`;  // ES6 feature

console.log(" STRING ");
console.log(typeof name);          // "string"
console.log(templateLiteral);      // "My name is Gealardo"
console.log(name.length);          // 9
console.log(name[0]);              // "G" (strings are array-like)
console.log();

// 1.3 Boolean
// - Only two values: true or false
// - Used for logical operations and conditions
let isStudent = true;
let isEmployed = false;

console.log("=== BOOLEAN ===");
console.log(typeof isStudent);     // "boolean"
console.log(10 > 5);               // true
console.log(10 === 10);            // true
console.log(10 === "10");          // false (strict equality)
console.log();

// 1.4 Undefined
// - Variable declared but NOT assigned a value
// - Also the return value of functions that don't return anything
let uninitialized;
let result = undefined;

console.log("=== UNDEFINED ===");
console.log(typeof uninitialized); // "undefined"
console.log(typeof result);        // "undefined"
console.log(undefined == null);    // true (loose equality)
console.log(undefined === null);   // false (strict equality)
console.log();

// 1.5 Null
// - Represents "intentionally empty" or "no value"
// - Must be explicitly assigned
let emptyValue = null;

console.log("=== NULL ===");
console.log(typeof emptyValue);    // "object" (THIS IS A BUG IN JS!)
console.log(emptyValue == null);   // true
console.log(emptyValue === null);  // true
// NOTE: typeof null === "object" is a famous JavaScript bug from 1995!
// It was never fixed to maintain backward compatibility
console.log();

// 1.6 Symbol (ES6)
// - Unique and immutable identifier
// - Used as object property keys to avoid collisions
let symbol1 = Symbol("description");
let symbol2 = Symbol("description");

console.log("=== SYMBOL ===");
console.log(typeof symbol1);       // "symbol"
console.log(symbol1 === symbol2);  // false (every symbol is unique!)
console.log();

// 1.7 BigInt (ES2020)
// - For integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1)
// - Created by appending 'n' to an integer or using BigInt()
let bigNumber = 9007199254740991n;
let anotherBig = BigInt("123456789012345678901234567890");

console.log("=== BIGINT ===");
console.log(typeof bigNumber);     // "bigint"
console.log(bigNumber + 1n);       // 9007199254740992n
// NOTE: Cannot mix BigInt and regular Number in operations!
// console.log(bigNumber + 1);     // ERROR!
console.log();

 
// 2. NON-PRIMITIVE / REFERENCE DATA TYPES

// These are MUTABLE (can be changed after creation)
// Stored in HEAP memory (dynamic size, slower access)
// Hold REFERENCES (pointers) to the actual data

// 2.1 Object
// - Collection of key-value pairs
// - Most fundamental reference type
let person = {
    name: "Gealardo",
    age: 22,
    isStudent: true
};

console.log("=== OBJECT ===");
console.log(typeof person);        // "object"
console.log(person.name);          // "Gealardo" (dot notation)
console.log(person["age"]);        // 22 (bracket notation)
person.age = 23;                   // Mutable! Can change properties
console.log(person.age);           // 23
console.log();

// 2.2 Array
// - Ordered list of values
// - Actually a special type of object
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null, { key: "value" }];

console.log("=== ARRAY ===");
console.log(typeof numbers);       // "object" (arrays are objects!)
console.log(Array.isArray(numbers)); // true (correct way to check)
console.log(numbers[0]);           // 1
console.log(numbers.length);       // 5
numbers.push(6);                   // Mutable! Can add elements
console.log(numbers);              // [1, 2, 3, 4, 5, 6]
console.log();

// 2.3 Function
// - Reusable block of code
// - Actually a special type of object (first-class citizens)
function greet(name) {
    return `Hello, ${name}!`;
}

let arrowFunc = (x) => x * 2;

console.log("=== FUNCTION ===");
console.log(typeof greet);         // "function"
console.log(typeof arrowFunc);     // "function"
console.log(greet("Gea"));         // "Hello, Gea!"
console.log(arrowFunc(5));         // 10
// NOTE: Functions can be stored in variables, passed as arguments,
// and returned from other functions (first-class citizens)
console.log();

// 2.4 Date
// - Represents a point in time
// - Built-in object for date/time manipulation
let now = new Date();
let specificDate = new Date("2024-12-25");

console.log("=== DATE ===");
console.log(typeof now);           // "object"
console.log(now.getFullYear());    // 2024 (or current year)
console.log(now.getMonth());       // 0-11 (0 = January!)
console.log(now.getDate());        // 1-31
console.log();

// 2.5 RegExp (Regular Expression)
// - Pattern matching for strings
let pattern = /hello/i;            // 'i' flag = case insensitive
let regex = new RegExp("world", "g");

console.log("=== REGEXP ===");
console.log(typeof pattern);       // "object"
console.log(pattern.test("Hello World")); // true
console.log();


// 3. MEMORY ALLOCATION: STACK vs HEAP


console.log("=== MEMORY ALLOCATION ===");

// STACK MEMORY (Primitives)
let a = 10;
let b = a;        // Creates a COPY
b = 20;
console.log(a);   // 10 (unchanged!)
console.log(b);   // 20
// Each variable gets its own copy in stack

// HEAP MEMORY (Reference Types)
let obj1 = { value: 10 };
let obj2 = obj1;  // Creates a REFERENCE (not a copy!)
obj2.value = 20;
console.log(obj1.value); // 20 (changed!)
console.log(obj2.value); // 20
// Both variables point to the SAME object in heap

console.log();

// ============================================================================
// 4. TYPEOF OPERATOR SUMMARY
// ============================================================================

console.log("=== TYPEOF OPERATOR SUMMARY ===");
console.log(typeof 42);              // "number"
console.log(typeof "hello");         // "string"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" (BUG!)
console.log(typeof Symbol());        // "symbol"
console.log(typeof 10n);             // "bigint"
console.log(typeof {});              // "object"
console.log(typeof []);              // "object" (arrays are objects!)
console.log(typeof function(){});    // "function"
console.log(typeof new Date());      // "object"
console.log(typeof /regex/);         // "object"
console.log();

// 
// 5. IMPORTANT NOTES & QUIRKS
// 



// NOTE 1: typeof null === "object" is a bug from 1995
console.log("typeof null:", typeof null); // "object" (should be "null")

// NOTE 2: Arrays are objects
console.log("typeof []:", typeof []);     // "object"
console.log("Array.isArray([]):", Array.isArray([])); // true

// NOTE 3: Functions are objects too
console.log("typeof function:", typeof function(){}); // "function"

// NOTE 4: NaN is a number
console.log("typeof NaN:", typeof NaN);   // "number"
console.log("NaN === NaN:", NaN === NaN); // false! (NaN is not equal to anything)

// NOTE 5: Checking for null correctly
let value = null;
console.log("value == null:", value == null);   // true
console.log("value === null:", value === null); // true (use this!)

// NOTE 6: Checking for undefined
let undef;
console.log("undef == undefined:", undef == undefined);   // true
console.log("undef === undefined:", undef === undefined); // true (use this!)

// NOTE 7: typeof on undeclared variables
// console.log(typeof undeclaredVar); // "undefined" (doesn't throw error!)
// console.log(undeclaredVar);        // ERROR! ReferenceError

console.log();
console.log("summary");
console.log("Primitive Types: number, string, boolean, null, undefined, symbol, bigint");
console.log("Reference Types: object, array, function, date, regexp");
console.log("Memory: Primitives in Stack, References in Heap");
console.log("typeof null: 'object' (historical bug)");
console.log("typeof array: 'object' (use Array.isArray())");


// memory uses
//premitive stack.
//non premitive heap.

let myname="ayun";
let originalname=myname;// not pointing the same memory of myname 
// instead there alloted another block of memory and initialized with "ayun";
originalname="Gealardo"; // changed in  originalname's memory block
console.log(myname);
console.log(originalname);

let user1={
   
  name:"ayun",
  age:20

}

let user2=user1;
user2.age=122;// change will reflect in both as they pointing to the same block of memory
console.log(user1);
console.log(user2);



