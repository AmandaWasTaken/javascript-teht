function roll_dice(sides){
	return Math.floor(Math.random() * parseInt(sides)) + 1;
}

function main(){
	const sides = parseInt(prompt("Anna nopan sivujen määrä"));
	if(sides <= 0 || isNaN(sides)){
		alert("Anna kelvollinen nopan sivujen määrä");
		return;
	}
	const ul = document.createElement('ul');
	while(true){
		let res = parseInt(roll_dice(sides));
		let li = document.createElement('li');
		li.textContent = res;
		ul.appendChild(li);
		if(res === sides) {break;}
	}
	document.getElementById('target').appendChild(ul);
}	
main();
