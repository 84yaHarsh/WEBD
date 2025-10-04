function saveToDB(data,success,faliure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed >4){
        success();
    }
    else{
        faliure();
    }
}
saveToDB("harsh",()=>{
    console.log("success 1:harsh is saved successfully");
    saveToDB("Kumar",()=>{
        console.log("success 2: kumar is saved successfully");
    },()=>{
       console.log("failure 2: weak commection !")
    });
},
()=>{
   console.log("faliure 1 :weak connection ! try again");
});

