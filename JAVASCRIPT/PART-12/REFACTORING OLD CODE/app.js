let h1 = document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       h1.style.color = color;
       resolve("color is changed");
     },delay);
    })
}
changeColor("red",1000)
.then(()=>{
    console.log("red color is completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color is completed");
    return changeColor("green",1000);
})
.then(()=>{
   console.log("green color is completed");
})
