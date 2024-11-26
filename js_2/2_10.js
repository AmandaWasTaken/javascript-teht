function voting(){

	const n_parts = parseInt(prompt("Anna osallistujien lukumäärä"));
	let cands = [];
	for(let i = 0; i < n_parts; i++){
		let candidate = prompt(`Osallistujan ${i+1} nimi:`);
		cands.push({
			"name": candidate,
			"votes": 0
		});
	}
	const n_voters = parseInt(prompt("Anna äänestäjien lukumäärä"));
	for(let i = 0; i < n_voters; i++){
		let vote = prompt("Ketä äänestät?");
		if(vote == ""){continue;}
		for(let j = 0; j < cands.length; j++){
			if(cands[j]["name"] === vote){
				cands[j]["votes"] += 1;
			}
		}
	} 
	let mostVotes = 0;
	let winner;
	for(let i = 0; i < cands.length; i++){
		if(cands[i]["votes"] > mostVotes){
			winner = cands[i]["name"];
			mostVotes = cands[i]["votes"];
		}
	}
	console.log(`The winner is ${winner} with ${mostVotes} votes.`);
	for(let i = 0; i < cands.length; i++){
		const str = `${cands[i]["name"]}: ${cands[i]["votes"]} votes`;
		console.log(str);
	}
}
voting();
