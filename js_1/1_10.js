const n_dice = parseInt(prompt("Anna noppien lukumäärä"));       
const target = parseInt(prompt("Anna kohdesumma"));
let total = 0;

for(let i = 0; i < 10000; i++){
	let sum = 0;
	for(let j = 0; j < n_dice; j++){
		sum += Math.floor(Math.random() * 6) + 1;
	}
	if(sum === target){
		total++;
	}
}
const probability = (total/10000)*100;
document.querySelector('#target').innerHTML = "Todennäköisyys: " + probability + "%";
