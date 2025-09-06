/*create a function to find min in an array */
let arr = [10,6,2,5,3,7,4];
let min = arr.reduce((min,el)=>{
    if(el<min)
        return el;
    else
        return min;
});
console.log(min);
