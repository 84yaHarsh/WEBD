/* we can assign multiple funtion to a single btn using event listener*/
let btns = document.querySelectorAll('button');
for(btn of btns){
    btn.addEventListener('click',appear);
    btn.addEventListener('click',like);
    btn.addEventListener('dblclick',()=>{   // comeent first two for axis this 
        console.log("you double clicked me!");
    });
}

function appear(){
    alert("its 84ya appearence");
}
function like(){
    alert("84ya liked your post");
}