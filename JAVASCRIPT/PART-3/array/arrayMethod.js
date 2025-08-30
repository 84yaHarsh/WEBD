let cars =["maruti","bmw","mercedes","zaguar"];
console.log(cars.indexOf("bmw")); // give index of array elemnt

console.log(cars.includes("zaguar")); // return true if elemnt exist

/*concat*/
let arr = ["mango","papaya"];
let brr = ["date","apple"];
let crr = arr.concat(brr);
console.log(crr); // original array will not change

/*reverse() */
let color =["blue","black","grey"];
color.reverse();
console.log(color);  // original array changed

/*slice() ->does not change original array*/
let d = ['mobile',"tab","laptop","computer"];
console.log(d.slice(2));
console.log(d.slice(1,2));
console.log(d.slice(-2));

/*splice(start,deleteCount,item0....itemN) -->change original array */
let th = ["shoes","clothes","sleeper","bag"];
console.log(th.splice(3)); //give all the elemnt 4 to last index
console.log(th.splice(0,1));
(th.splice(0,1,"charger","id"));// start from zero,remove 0th index,add charger,id
console.log(th);
/*sory()  ->not apply in number*/
let ch = ['d','a','e','r','b'];
ch.sort();
console.log(ch);