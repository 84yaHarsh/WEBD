let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");



div.addEventListener("click",function(event){
    console.log("div was clicked");
});



ul.addEventListener("click",function(event){
    console.log("ul is clicked");
});

for(let lis of li){
    lis.addEventListener("click",function(event){
        console.log("li is clicked");
});

}
