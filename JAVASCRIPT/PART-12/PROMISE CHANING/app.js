function saveToDB(data){
  return new Promise((resolve,reject)=>{
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
        resolve("promise is resolved");
    }
    else{
        reject("weak connection : promise is rejected ");
    }
  })
}
saveToDB("84ya_harsh_")
.then(()=>{
    console.log("success 1");
    return saveToDB("harsh_u21");
})
.then(()=>{
    console.log("success 2");
    return saveToDB("anonymous_hearts");
})
.then(()=>{
    console.log("success 3");
})
.catch(()=>{
    console.log("faliure 1");
})