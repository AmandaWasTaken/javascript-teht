const target = document.querySelector('#target');
const first = "<li>First item</li>"
const second = "<li>Second item</li>"
const third = "<li>Third item</li>"

target.setAttribute("class", "my-list");
target.innerHTML = first;
target.innerHTML += second;
target.innerHTML += third;
