const id = setInterval(()=>{
    console.log("hello harsh!!");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("'clear interval run");
},10000);