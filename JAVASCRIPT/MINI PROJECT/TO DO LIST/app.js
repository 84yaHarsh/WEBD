let btn = document.querySelector("button");
let ipt = document.querySelector("input");
let ul =  document.querySelector("ul");
btn.addEventListener("click",function(){
     let item = document.createElement("li");
     item.innerText = ipt.value;
     ul.appendChild(item);
     ipt.value ="";
});