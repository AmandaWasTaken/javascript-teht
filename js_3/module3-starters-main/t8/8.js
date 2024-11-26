const button = document.getElementById("start");
button.addEventListener("click", function() {
    const num1  = parseFloat(document.getElementById("num1").value);
    const num2  = parseFloat(document.getElementById("num2").value);
    const op    = document.getElementById("operation").value;
    const result = document.getElementById("result");
    let res = 0;

    switch(op){
        case "add":
            res = num1 + num2;
            break;
        case "sub":
            res = num1 - num2;
            break;
        case "multi":
            res = num1 * num2;
            break;
        case "div":
            res = num1/num2;
            break;
    }
    result.innerHTML = res;
});