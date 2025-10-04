function saveToDb(data){
    return new Promise((resolve,reject)=>{
         let internetSpeeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed >4){
        resolve("data is saved ");
    }
    else{
        reject("try again");
    }
  });
}
saveToDb("harsh84ya");
