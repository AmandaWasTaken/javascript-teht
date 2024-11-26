function concat(words){
	const len = words.length;
	let res = "";
	for(let i = 0; i < len; i++){
		res += words[i];
	}
	return res;
}

function main(){
	let words = [];
	while(true){
		let word = prompt("Syötä sana");
		if(word == ""){break;}
		words.push(word);
	}
	let res = concat(words);
	document.getElementById('target').textContent = res;
}
main();
