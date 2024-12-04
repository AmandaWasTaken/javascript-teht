const button = document.getElementById('start');
button.addEventListener("click", function(){

	const calc = document.getElementById('calculation');
	const nums = calc.value.match(/\d+/g); // regex taikatemppu
	let num1, num2;
	if(nums){
		num1 = parseInt(nums[0], 10);  // base 10 
		num2 = parseInt(nums[1], 10);
	} else {
		console.log("Couldn't extract numbers from input");
		return;
	}
	let res;	
	if(calc.value.includes('+')){
		res = num1 + num2;
	} else if(calc.value.includes('-')){
		res = num1 - num2;
	} else if(calc.value.includes('*')){
		res = num1*num2;
	} else if(calc.value.includes('/')){
		res = num1/num2;
	} else {
		console.log("Invalid operation");
		return;
	}
	
	const target = document.getElementById('result');
	target.innerHTML = res;
});
