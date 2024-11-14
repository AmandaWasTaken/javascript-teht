let nums = [];
while(true){
	let num = parseInt(prompt("Anna luku"));
	if(nums.includes(num)){ break; }
	nums.push(num);
}
nums.sort();
for(let i = 0; i < nums.length; i++){
	console.log(nums[i]);
}
