/* highorder function
hightorder function is a function that take another function as an argument */
function multipleGreet(func,count){
    for(let i=1; i<=count; i++){
       func();
    }
}
let greet = function(){
    console.log("hello");
}
multipleGreet(greet,2);
