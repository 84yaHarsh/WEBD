/* Average of three number*/
function average(sum1,sum2,sum3){
    avg = (sum1+sum2+sum3)/3;
    console.log(avg);
}
average(2,3,4);

/* table of a number */
function table(num){
  for(let i=1; i<=10; i++){
     console.log(num*i);
  }
}
table(5);