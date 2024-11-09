n_rolls = parseInt(prompt("Enter the number of dice rolls:"));
let sum = 0;
for(let i = 0; i <= n_rolls; i++){
    let foo = Math.floor(Math.random()*6) + 1;
    sum += foo;
}
document.querySelector('#target').innerHTML = "Summa on " + sum;
