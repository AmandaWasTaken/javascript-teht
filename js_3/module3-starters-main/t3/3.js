'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector("#target");
for(let i = 0; i < 3; i++){
    let li = document.createElement('li');
    li.textContent = names[i];
    target.appendChild(li);
}