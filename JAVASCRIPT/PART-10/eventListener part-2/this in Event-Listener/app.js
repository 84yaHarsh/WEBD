let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let div = document.querySelector('div');
let btn = document.querySelector('button');

h1.addEventListener('click',changeColor);
p.addEventListener('click',changeColor);
div.addEventListener('click',changeColor);
btn.addEventListener('click',changeColor);

function changeColor(){
    this.style.backgroundColor = "blue";
}