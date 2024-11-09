const num = parseInt(prompt("Enter an integer"));
const target = document.getElementById('target');
let res = true;

if(num <= 1){
	res = false;
} else {
	for(let i = 2; i <= Math.ceil(num/2); i++){
		if(num % i === 0){
			res = false;
			break;
		}
	}
}
if(res){
	target.innerHTML = num + " is a prime";	
} else {
	target.innerHTML = num + " is not a prime";
}
