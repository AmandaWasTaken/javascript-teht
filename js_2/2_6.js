function roll_dice(){
	return Math.floor(Math.random() * 6) + 1;
}

const ul = document.createElement('ul');
while(true){
	let res = parseInt(roll_dice());
	let li = document.createElement('li');
	li.textContent = res;
	ul.appendChild(li);
	if(res === 6) {break;}
}
document.getElementById('target').appendChild(ul);

