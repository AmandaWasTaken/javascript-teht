const ol = document.createElement('ol');
let n_parts = prompt("Anna osallistujien määrä");
let parts = [];
for(let i = 0; i < n_parts; i++){
	let name = prompt("Anna osallistujan " + parseInt(i+1) + " nimi");
	parts.push(name);
}
parts.sort();
for(let i = 0; i < n_parts; i++){
	let li = document.createElement('li');
	li.textContent = parts[i];
	ol.appendChild(li);
}
document.getElementById('target').appendChild(ol);
