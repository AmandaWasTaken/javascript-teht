const foo = confirm("Should I calculate the square root?");
if(foo) {
    num = parseInt(prompt("Input a number: "));
    num = Math.sqrt(num);
    document.querySelector('#target').innerHTML = num;
} else {
    document.querySelector('#target').innerHTML = "The square root is not calculated";
}
