let h1 = document.querySelector("h1");
function colorChange(color,delay){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color = color;
        console.log(`color is changed to ${color}`);
        resolve("color channged successfully");
    },delay);
 });
}
async function demo(){
    await colorChange("red",1000);
    await colorChange("green",1000);
    await colorChange("blue",1000);
    await colorChange("orange",1000);
    
}