fetch("https://catfact.ninja/fact")
.then((res)=> res.json() )
.then((data1)=> {
    console.log(data1)
    return fetch("https://catfact.ninja/fact");
})

.then((res2)=> res2.json())
.then((data2)=>console.log(data2))
.catch((err)=>console.log(err));

/*
let url = "https://catfact.ninja/fact" 
fetch(url)
.then((res1) =>{
    return res1.json();})
.then((data1)=>{
    console.log(data1) 
    return fetch(url);})
.then((res2)=>{
    return res2.json();})
.then((data2)=>{
    console.log(data2)})
.catch((err)=>{
    console.log(err)});





*/