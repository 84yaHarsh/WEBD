/* try&Catch
the try statement allow you to define a block of code to be tested 
for errors while it is being executed

The catch statement allows you to define a block of code to be executed
,if an error occur in the try block
*/
console.log("hello");
console.log("hello");
try{
    console.log(a);
} catch(err){
    console.log("caught an error a is not defined");
    console.log(err);
}
console.log("hello");
console.log("hello");

