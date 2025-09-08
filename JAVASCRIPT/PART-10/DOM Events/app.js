let btns = document.querySelectorAll('button');
for(btn of btns){
   btn.onclick = task ;  
   btn.onmouseenter = ()=>{
    console.log("hover is completeed");
   };
}

function task(){
    alert("its 84ya appearence");
    console.log("task is completed");
}
/* drawback :

// we cant assign multiple value to onclick

for(btn of btns){
btn.onclick = ()=>{
    console.log("hello");
    }
btn.onclick = ()=>{
        console.log("harsh 84ya");
        }
}

output->in this question only hello will print each time when we click the btn
*/