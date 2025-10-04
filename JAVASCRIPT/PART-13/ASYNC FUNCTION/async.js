async function greet(){
    //  throw "404 page not found";
    return "hello";
}
greet()
.then((result)=>{
    console.log("promise is resolved");
    console.log("result is:",result);
})
.catch((err)=>{
    console.log("promise is rejected");
    console.log("error is:",err);
})
let harami = async()=>{};
// returns a promise(<fulfilled>:undefined);