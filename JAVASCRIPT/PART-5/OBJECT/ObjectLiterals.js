/* object literals -> used to stored keyed collection & complex intities*/
const info = {
    name : "harsh",
    age  :  21  ,
    marks :8.12
};
console.log(info);
console.log(info.name);   // will not work when key use special-charecter(@,-,$) ans space like "full name"
console.log(info["name"]); // always works
const id = {
    "full name" : "harsh chaurasia",
    "user-id" : "csefw2307"
};
console.log(id["full name"]);
console.log(id["user-id"]);