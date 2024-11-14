const ul = document.createElement('ul');
let dogs = [];
for(let i = 0; i < 6; i++){
	dog = prompt("Anna koiran nimi");
	dogs.push(dog);
}
dogs.sort().reverse();
for(let i = 0; i < 6; i++){
	let li = document.createElement('li');
	li.textContent = dogs[i];
	ul.appendChild(li);
}
document.getElementById('target').appendChild(ul);
