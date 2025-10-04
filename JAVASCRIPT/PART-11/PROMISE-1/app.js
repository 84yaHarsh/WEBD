function saveToDb(data,success,failure){
let internetSpeed = Math.floor(Math.random()*10)+1;
if(internetSpeed > 4){
    success();
}
else{
    failure();
}
}
saveToDb("something is coming",()=>{
    console.log("data is saved successfully");
    saveToDb("harsh 84ya",
    ()=>{
        console.log("name is saved successfully");
    },
    ()=>{
        console.log("weak connection");
    })
},
    ()=>{
        console.log("weak connection !!");
    }
);