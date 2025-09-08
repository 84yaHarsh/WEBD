/* a <p> with rerd text that says "hey i am red! with js and dom only*/
let para1 = document.createElement('p');
para1.innerText ="hey i am red!";

para1.style.color='red';
document.querySelector('body').append(para1);

// an h3 with blue text tha says "i am blue h3!"
let h3 = document.createElement('h3');
h3.innerText = "i m blue h3!";
document.querySelector('body').append(h3);
h3.classList.add('blue');

/*a <div> with a border and pink background color with the 
 following element inside of it 
 
 another <h1> that says "i am in a div"
 a<p> that says "ME TOO!"
 */
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');
h1.innerText = "i am a div";
p.innerText = "ME TOO!";
div.append(h1);
div.append(p);
div.classList.add('box');
document.querySelector('body').append(div);
