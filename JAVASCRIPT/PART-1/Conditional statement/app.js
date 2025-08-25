let color = "Red";
// traffic light system
if(color=="Red"){
    console.log("stop");
}
else if(color=="yellow"){
    console.log("slow down");
}
else{
    console.log("go");
}
// nested if else

    let marks = 34;
    if(marks>=33){
        console.log("pass");
        if(marks>=80){
            console.log("Grade:O");
        }
        else{
            console.log("Grade:A");
        }
    }
    else{
        console.log("Better luck next time");
    }   
// Switch Statement

let light = "Red";
switch(light){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go road is safe");
        break;
    default :
    console.log("traffic light is not work");
}
console.log("after switch stt");


// weekly reminder

let day =4;
switch(day){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("INVALID DAY");
}