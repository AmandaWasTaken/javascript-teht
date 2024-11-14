function even(nums){
	const len = nums.length;
	let res = [];
	for(let i = 0; i < len; i++){
		if(nums[i] % 2 == 0){
			res.push(nums[i]);
		}
	}
	return res;
}

function main(){
	const nums = [1,2,3,4,5,6,7,8,9];
	const res = even(nums);
	console.log("Alkuperäinen taulukko: " + nums);
	console.log("Uusi taulukko: " + res);
}
main();
