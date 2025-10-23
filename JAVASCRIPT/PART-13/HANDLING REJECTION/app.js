let h1 = document.querySelector("h1");
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if(num >3){
                reject("error is generated");
            }
            h1.style.color = color;
            console.log(`color is changed to ${color}`);
            resolve();
        },delay);
    });
}
async function demo(){
    try{
    await colorChange("red",1000);
    await colorChange("blue",1000);
    await colorChange("yellow",1000);
    await  colorChange("orange",1000);
    }
    catch(err){
        console.log(err);
    }
   
    let a = 6;
    console.log("apna harsh");

}