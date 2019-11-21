'use sctrict';

function showThis (a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5);
showThis(6, 5);

////////////////////

let obj = {
    a: 20,
    b: 15,
    sum: function sum () {
        console.log(this);
        function shout() {
            console.log(this);
        }
    }
};
obj.sum();
obj.shout();

///////////////////////

let user = {
    name: 'john'

};

function sayName (surname) {
    consol.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

function count (number) {
    return this * number;
}

let double = count.bind(2); 
console.log(double(3));
console.log(double(10));



// 1) просто вызов функции - window/undefined
// 2) Метод обьекта - this = обьект
// 3) Конструктор (new) - this = новый созданный обьект
// 4) Указания конкретного контекста - call, apply, bind
