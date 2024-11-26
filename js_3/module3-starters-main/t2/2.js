const target = document.querySelector("#target");
const first = document.createElement('li');
const second = document.createElement('li');
const third = document.createElement('li');


first.innerText = "First item";
second.innerText = "second item";
third.innerText = "third item";
second.setAttribute("class", "my-item");
target.appendChild(first);
target.appendChild(second);
target.appendChild(third);