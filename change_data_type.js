

// to string

//1
console.log(typeof(String(4)));

//2
console.log("ww" + 5);
console.log('https://google.com/' + 5);

// to Number

// 1
console.log(typeof(Number('5')));

//2
console.log(typeof(+'4'));

//3
console.log(typeof(parseInt("15px", 10)));

let answer = +prompt('Hello?', '');


//to Boolean

// 0, '', null, undefined, NaN  --------- FALSE


//1 
let switcher = null;

if (switcher) {
    console.log("working...");
}

switcher = 1;

if (switcher) {
    console.log('work well');
}


// 2 
console.log(typeof(Boolean("dfsdf")));

//3 

console.log(typeof(!!("dfsdf")));

