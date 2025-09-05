const Sum = (a,b) =>{
    console.log(a+b);
};
Sum(1,2);

// cube
const cube = (n)=>{
    console.log(n*n*n);
};
cube(6);

// hello world
let hello = ()=>{
    console.log("hello world");
};
hello();
/*normal function have their own arguments */
function add(c,d){
    console.log(arguments);
};
add(1,2,4); 
