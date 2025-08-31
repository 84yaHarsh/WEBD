const max = prompt("enter the max num");   // number guessing
const random = Math.floor(Math.random()*max)+1; // secert number from 1 to 100
let guess = prompt("guess the num");
console.log(random); // print secert num
while(true){
    if(guess == random){
        console.log("congrates ! you win..");
        break;
    }
    else if(guess== "quit"){
        console.log("quitting game");
        break;
    }
    else{
        guess = prompt("try again !!");
    }

}

