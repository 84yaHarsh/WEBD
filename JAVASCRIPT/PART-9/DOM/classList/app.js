/*   
               Manuplating style
using classList

obj.classList   // display that attribute have how much classes

classList.add() to add new classes
classList.remove() to remove classes
classList.contains() to check if class exists
classList.toggle() to toggle between add & remove  ->class present nhi h to add kr dega or h to remove kr dega
*/

let heading = document.querySelector('h1');
console.dir(heading);
heading.classList; // show the classList of the heading
heading.classList.add('green');
heading.classList.add('line');
heading.classList.remove('green'); // remove the green class frrom heading
console.log(heading.classList.contains('green'));
console.log(heading.classList.toggle('green')); // add the green class and return true
console.log(heading.classList.toggle('green')); // remove the green class and return false

let box = document.querySelectorAll('.box a');
for(let i=0; i<box.length; i++){
   box[i].classList.add('yellow');

}
console.log(box);


// nevigation on page
let boxy = document.querySelector('.box');
console.log(boxy.children);
console.log(boxy.childElementCount);

let ul = document.querySelector('ul');
console.log(ul.parentElement);
console.log(ul.children);