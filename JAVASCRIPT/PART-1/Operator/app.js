/* comparision operator
   "==" -> compare value, not type
   */

console.log("123"==123);  // true
console.log(1=='1'); // true
console.log(0=='');  // true
console.log(0==false);  // true
console.log(null==undefined); // true



/*
   "===" ->compare both value and type
*/
console.log("123"===123);  // false
console.log(1==='1'); // false
console.log(0==='');  // false
console.log(0===false);  // false
console.log(null===undefined); // false

// comparision for non number

console.log('a'>'A');  // a->61 A ->41


// Logical operator(&& ,|| , !)

// 1.logical AND(&&)  -> a*b
console.log((false && true));
console.log((true && false));

// 2.logical OR(||) a+b  "koi ek value hi true hogi to output true hoga"
let marks = 86;
if(marks>=33 || marks>80){
   console.log("Grade:A");
   console.log("pass");
}
// 3. Not
console.log(!false);

// practice ques -1
let str = "apple";
if(str[0]==="a" && str.length>3){
   console.log("good string");
}
else{
   console.log("bad string");
}

/* truthy and falsy

"false values" --> false,0,-0,On,""(empty string),null,undefined,NaN
except this false values all are true
*/
let string = "";
if(string){  // this will return false so else statement will run
   console.log("string is empty");
}
else{
   console.log("string is not empty");
}
