const form = document.getElementById('source');
const target = document.getElementById('target');
form.addEventListener("submit", function(event){
	event.preventDefault();
	const firstname = form.querySelector('input[name="firstname"]').value;
	const lastname = form.querySelector('input[name="lastname"]').value;
	target.innerHTML = `Your name is ${firstname} ${lastname}`;
});
