// 1

let num = 20;

function showFirstMessage (text) {

    alert(text);
    num = 10;
}

showFirstMessage('Hello');
console.log(num);

// 2 function declaration
console.log(calc(3, 4));

function calc (a, b) {
    return (a + b);
}

// function expresion
console.log(newCalc(3, 4));

let newCalc = function (a, b) {
    return (a + b);
}



// 3

function returnVar () {
    let num = 50;
    return num;
}

let anotherNum = returnVar();
console.log(anotherNum);

// 4

let sum = (a, b) => a+b;


let str = "test";
console.log(str.length);
console.log(str.toUpperCase());

let twelve = '12.2px';
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));