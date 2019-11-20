

//new RegExp('pattern', 'flags');

let answer = prompt('Write your name !');

let reg = /n/i;
let reg2 = /n/g;


console.log(answer.search(reg)); // return first dounded element
console.log(answer.match(reg2)); // return array with founded elements
console.log(reg.test(answer));  // return true or false (find or not)

// i - флаг регистра
// g - ищет все совпадения 
// m - флаг многострочности


// \d - find all numbers
// \w - find all words
// \s - find all spaces

// \D - find NOT a numbers
// \W - find NOT a words
// \S - find NOT a spaces


let pass = prompt("Write your pass");

console.log(pass.replace(/./g, '*'));
alert('12-34-56'.replace(/-/g, ':'));

let reg3 = /\d/g;
let quest = prompt('writr a number plz');
console.log(quest.match(reg3));


let str = 'my name is R2D2';
console.log(str.match(/\w\d\w\d/i));