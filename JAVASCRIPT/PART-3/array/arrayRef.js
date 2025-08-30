let arr =['a','b','c','d'];
let arrcopy = arr; // now both arrays are connected
arr.push('f');
console.log(arr==arrcopy);
console.log(arr===arrcopy);
console.log(arr);
console.log(arrcopy);

console.log(1==1);
console.log([1]==[1]);// bcoz address of array  is diff in memory