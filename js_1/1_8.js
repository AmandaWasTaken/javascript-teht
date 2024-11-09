const ul = document.createElement('ul');
const start = prompt("Anna aloitusvuosi");
const end   = prompt("Anna lopetusvuosi");

for(let i = start; i <= end; i++){
	let li = document.createElement('li');
	li.textContent = i;
	ul.appendChild(li);
}
document.getElementById('target').appendChild(ul);
