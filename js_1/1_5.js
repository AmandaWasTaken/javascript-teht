const year = parseInt(prompt("Enter a year"));
let res;
if(year % 4 == 0 && year % 100 != 0){
    res = true;
} else if(year % 100 == 0 && year % 4 == 0 && year % 400 == 0){
    res = true;
} else {
    res = false;
}

if(res) {
    document.querySelector('#target').innerHTML = year + " on karkausvuosi";
} else {
    document.querySelector('#target').innerHTML = year + " ei ole karkausvuosi";
}