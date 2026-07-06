// there are three type in javascript we can declaire a variable
const accountID=1234567;
var userEmail="ayun@gmail.com";
let userState="up";

userAge=20; // allowed to assign
// const userGender;error: declaration in const without inisializing not allowed
let userGender; //undefined but not error; 
// accountID = 234;  TypeError: Assignment to constant not allowed.
// console.log(accountID); for one variable printing.



console.table([accountID,userEmail,userState,userAge,userGender]);

userEmail="vikash@gmail.com";
userState="jharkhand";
userAge="21";
userGender="male";
console.table([accountID,userEmail,userState,userAge,userGender]);

/*
Do not prefer to use (var)
issue in block and funtional scope.
let -> solved all the problem related to scope that was in var.
-------use only const(not asign after once declare & initializing) , let(can be asigned after once get declared----) 
*/
