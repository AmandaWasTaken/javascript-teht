const username = prompt("Enter your name");
hat = Math.random()*4 + 1;
let res;
switch(hat){
    case 1:
        res = "Gryffindor";
        break;
    case 2:
        res = "Slytherin";
        break;
    case 3:
        res = "Hufflepuff";
        break;
    default:
        res = "Ravenclaw";
        break
}
document.querySelector('#target').innerHTML = username + ", You are " + res;
