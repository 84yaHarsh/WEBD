let arr = [["ironman","thor","hulk"],["superman","batman","flash"]];
for(let i=0; i<arr.length; i++){
   console.log(i,arr[i]);
   for(let j=0; j<arr[i].length; j++){
    console.log(`${j}`,arr[i][j]);
   }
}

let info = [["aman",7.98],["mahendra",7.9],["harsh",8.5]];
for(let i=0; i<info.length; i++){
    console.log("info of student",i+1);
    for(let j=0; j<info[i].length; j++){
        console.log(info[i][j]);
    }
}