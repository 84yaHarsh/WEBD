/* selecting image by class Name*/
let imgObj = document.getElementsByClassName("oldImg");
for(let i=0; i<imgObj.length; i++){
    console.log(`source of img num  ${[i]} is chnaged`);
     console.dir(imgObj[i].src = "spiderman_img.png ");
}

/*selecting elemnt by tagname */
let tagObj = document.getElementsByTagName("p");
for(let i=0; i<tagObj.length; i++){
    console.dir(tagObj);
    tagObj[i].innerText = "harsh is the best";
}

/* querySelector*/
// only give 1 element if multiple is present
console.dir(document.querySelector("p"));

// gave all the selector
console.dir(document.querySelectorAll("p"));

// for nested
console.dir(document.querySelectorAll("div a"));

// for class
console.dir(document.querySelectorAll(".oldImg"));

// for id
console.dir(document.querySelectorAll(""));