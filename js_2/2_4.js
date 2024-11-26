nums = [];
while(true){
	num = parseInt(prompt("Anna numero"));
	if(num === 0){ break; }
	nums.push(num);
}
nums.sort().reverse();
for(let i = 0; i < nums.length; i++){
	console.log(nums[i]);
}
