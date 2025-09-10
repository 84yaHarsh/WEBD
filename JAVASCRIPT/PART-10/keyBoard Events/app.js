// let ip = document.querySelector('input');
// ip.addEventListener("keydown",function(){
//     console.log("key is pressed");
// });
//   ip.addEventListener("keyup",function(){
//       console.log("key is released");
//   });

let ip = document.querySelector('input');
ip.addEventListener("keydown",function(event){
    if(event.code=="ArrowUp"){
          console.log("move upword");
    }
   else if(event.code=="ArrowDown"){
          console.log("move downword");
    }
  
   else if(event.code=="ArrowLeft"){
          console.log("move left");
    }
    else if(event.code=="ArrowRight"){
       console.log("move right");
    }
    
    });
