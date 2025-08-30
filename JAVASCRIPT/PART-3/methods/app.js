/*let password = prompt("enter new password");
let newPass = password.trim(); 
console.log(newPass);  // return a new string without whitespaces from left and right


let a = "HarshCHaurasia";
console.log(a.toUpperCase());  // to convert all the string in uppercase
console.log(a.toLowerCase());  // to convert all the string in lowercase
console.log(a.indexOf("CHau")); // give first occurence of the element , give -1 if string does not exist
console.log(a.indexOf("s"));
*/
// methid channing
let str = "   hello "; 
let b =  str.trim().toUpperCase();
console.log(b);
let c = "harsh";
console.log(c.slice(1,3)); // give a part of the string
console.log(c.slice(1)); // bydefault print till last index 
console.log(c.slice(-1)); // 5-1 = c[4] = 'h'
console.log(c.replace("ar","im")); // replace rs with im
console.log(c.repeat(2)); // repeat the string 