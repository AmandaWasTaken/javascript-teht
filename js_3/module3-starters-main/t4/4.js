'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target = document.querySelector("#target");
for(let i = 0; i < 3; i++){
  let option = document.createElement('option');
  option.setAttribute("value", students[i]['id']);
  option.textContent = students[i]['name'];
  target.appendChild(option);
}
