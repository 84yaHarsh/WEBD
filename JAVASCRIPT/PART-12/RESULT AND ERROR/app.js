function saveToDB(data){
  return new Promise((resolve,reject)=>{
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
        resolve("promise is resolved");
    }
    else{
        reject("weak connection  ! promise was rejected ");
    }
  })
}
saveToDB("84ya_harsh_")
.then((result)=>{
    console.log("success 1");
    console.log("result of data 1 is :",result);
    return saveToDB("harsh_u21");
})
.then((result)=>{
    console.log("success 2");
    console.log("result of data 2 is :",result);
    return saveToDB("anonymous_hearts");
})
.then((result)=>{
    console.log("success 3");
    console.log("result of data 3 is :",result);
})
.catch((error)=>{
    console.log("faliure 1");
    console.log("error of promise :",error);
})