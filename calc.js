let sum = 0, sum2 = 0, symbol = null, count = 0, btn = 0;

function one() {
    btn = 1;
    document.getElementById("cur").innerText += 1
    sum = sum * 10 + 1;
    if (count === 0) {
        sum2 = sum;
        console.log(sum)
        console.log(sum2)
    }
}

function two() {
    btn = 1;
    document.getElementById("cur").innerText += 2
    sum = sum * 10 + 2;
    if (count === 0) {
        sum2 = sum;
        console.log(sum)
        console.log(sum2)
    }
}
function three() {
    btn = 1;
    document.getElementById("cur").innerText += 3
    sum = sum * 10 + 3;
    if (count === 0) {
        sum2 = sum;
        console.log(sum)
        console.log(sum2)
    }
}
function four() {
    btn = 1;
    document.getElementById("cur").innerText += 4
    sum = sum * 10 + 4;
    if (count === 0) {
        sum2 = sum;
        console.log(sum)
        console.log(sum2)
    }
}
function five() {
    btn = 1;
    document.getElementById("cur").innerText += 5
    sum = sum * 10 + 5;
    if (count === 0) {
        sum2 = sum;
        console.log(sum)
        console.log(sum2)
    }
}
function six() {
    btn = 1;
    document.getElementById("cur").innerText += 6
    sum = sum * 10 + 6;
    if (count === 0) {
        sum2 = sum;
        console.log(sum)
        console.log(sum2)
    }
}
function seven() {
    btn = 1;
    document.getElementById("cur").innerText += 7
    sum = sum * 10 + 7;
    if (count === 0) {
        sum2 = sum;
        console.log(sum)
        console.log(sum2)
    }
}
function eight() {
    btn = 1;
    document.getElementById("cur").innerText += 8
    sum = sum * 10 + 8;
    if (count === 0) {
        sum2 = sum;
        console.log(sum)
        console.log(sum2)
    }
}
function nine() {
    btn = 1;
    document.getElementById("cur").innerText += 9
    sum = sum * 10 + 9;
    if (count === 0) {
        sum2 = sum;
        console.log(sum)
        console.log(sum2)
    }
}
function zero() {
    btn = 1;
    document.getElementById("cur").innerText += 0
    sum = sum * 10 + 0;
    if (count === 0) {
        sum2 = sum;
        console.log(sum)
        console.log(sum2)
    }
}
function dot() {
    btn = 1;
    document.getElementById("cur").innerText += ".";
    if (count === 0) {
        sum = sum + "."
        console.log("sum after adding the point" + sum);
    }
}
function allClear() {
   
        document.getElementById("pre").innerText = 0
        document.getElementById("cur").innerText = 0
        sum = 0; sum2 = 0;
        symbol = null;
        btn = 0;
        count=0;
    }

// function del(){
//     if (count === 0) {
//         sum2=0
//         document.getElementById("cur").innerText = sum2
//     }
//     if (count === 1) {
        
//     }
// }

function add() {
    document.getElementById("cur").textContent = sum2 + "+";
    symbol = 1;
    count = 1;
    sum = 0;
    console.log("Sum:" + sum)
    console.log("Sum2:" + sum2)
}
function divide() {
    document.getElementById("cur").textContent = sum2 + "/";
    symbol = 4;
    sum = 0;
    count = 1
    console.log("Sum:" + sum)
    console.log("Sum2:" + sum2)
}
function multiply() {
    document.getElementById("cur").textContent = sum2 + "*";
    symbol = 3;
    sum = 0;
    count = 1
    console.log("Sum:" + sum)
    console.log("Sum2:" + sum2)
}
function subtract() {
    document.getElementById("cur").textContent = sum2 + "-";
    symbol = 2;
    sum = 0;
    count = 1
    console.log("Sum:" + sum)
    console.log("Sum2:" + sum2)
}
function equal() {
    console.log("Sum in equal " + sum)
    console.log("Sum2 in equal " + sum2)
    switch (symbol) {
        case 1:
            document.getElementById("cur").textContent = "";
            document.getElementById("pre").textContent = sum2 + sum;
            break;
        case 2:
            document.getElementById("cur").textContent = "";
            document.getElementById("pre").textContent = sum2 - sum;
            break;
        case 3:
            document.getElementById("cur").textContent = "";
            document.getElementById("pre").textContent = sum2 * sum;
            break;
        case 4:
            document.getElementById("cur").textContent = "";
            document.getElementById("pre").textContent = sum2 / sum;
            break;
    }
    sum = 0;
    sum2 = 0;
    symbol = null;
    count = 0;
    btn = 0;
}
