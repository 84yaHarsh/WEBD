 /* append ->ka use kuch bhi add krne ke liye hota h like text,tag anything in children its like editing
 appendChild ->ka use parent element ke last m chile ko add krne ke liye hota */
 let newp = document.createElement('p');
 console.log(newp);
 newp.innerText = "hi i am new paragraph";
 let body = document.querySelector('body');
 body.appendChild(newp);
 newp.append(" i am additional text that are added");

 let btn1 = document.createElement('button');
 btn1.innerText = "press it"
 newp.append(btn1); 


 // prepend ->add element at before
 let box = document.querySelector('.box');
 let btn2 = document.createElement('button');
 btn2.innerText = "click me";
 box.prepend(btn2);

 // adjecentElement
 let btn3 = document.createElement('button');
 btn3.innerText = "i am new btn";
 let para = document.querySelector('#description');
 para.insertAdjacentElement('beforebegin',btn3);
 para.insertAdjacentElement('afterbegin',btn3);
 para.insertAdjacentElement('beforeend',btn3);
 para.insertAdjacentElement('afterend',btn3);
 

 // box.removeChild(btn2) ->remove the btn2 from parent box
 // btn2.remove(); // remove the btn2