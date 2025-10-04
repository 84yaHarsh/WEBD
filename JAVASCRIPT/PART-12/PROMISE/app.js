function saveToDB(data){
   return new Promise((resolve,reject)=>{
       let internetSpeed = Math.floor(Math.random()*10)+1;
       if(internetSpeed > 4){
          resolve("success 1: data is saved");
       }
       else{
         reject("faliure 1 :  weak connection");
       }
   }
 ) 
}
saveToDB("harsh")
.then(()=>{
    console.log("promise is resolved");
    
})
.catch(()=>{
    console.log("promise is rejected");
});
