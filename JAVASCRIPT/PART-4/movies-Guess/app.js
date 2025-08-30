const anime = "Naruto";
let guess = prompt("guess favriote movie");
while(guess!=anime && guess!="quit"){
    console.log("wrong");
    guess = prompt("wrong guess! try again");
}
if(guess==anime){
    console.log("congrates!");
}
else{
    console.log("you quit");
}