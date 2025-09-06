/* write an arrow function that print hello after every 2 sec total print would be 5
*/


const id = setInterval(()=>{
    console.log("hello harsh!!");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("'clear interval run");
},10000);