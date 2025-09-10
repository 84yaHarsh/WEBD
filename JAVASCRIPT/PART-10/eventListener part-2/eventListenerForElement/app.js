let para = document.querySelector('p');
para.addEventListener('click',()=>{
   let red = Math.floor(Math.random()*255);
   let green = Math.floor(Math.random()*255);
   let blue = Math.floor(Math.random()*255);
   let rColor = `rgb(${red},${green},${blue})`;
   para.style.backgroundColor = rColor;
});

let box = document.querySelector('div');
box.addEventListener('mouseenter',()=>{
   let red = Math.floor(Math.random()*255);
   let green = Math.floor(Math.random()*255);
   let blue = Math.floor(Math.random()*255);
   let rColor = `rgb(${red},${green},${blue})`;
   box.style.backgroundColor = rColor;
});
