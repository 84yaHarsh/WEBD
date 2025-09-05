/* Write an arrow function that print hello after each interval of 2 sec */

const demo = ()=>{
    console.log("hello");
};
const hello = ()=>{
   for(let i=0; i<5; i++){
    setTimeout(demo,2000);
   }
}
hello();