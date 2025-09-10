let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
});
let user = document.querySelector("#user");
user.addEventListener("change",function(event){
   console.log(" change event");
   console.log(user.value);
});
let pass = document.querySelector("#pass");
user.addEventListener("input",function(event){
   console.log("input event");
   console.log(user.value);
});
