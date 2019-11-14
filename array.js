

let arr= ["first", 2, 3, 'four', 5];

console.log(arr);

arr.pop(); // удаление элемента с конца 

arr.push("5"); // добавление элемента в конец

arr.shift(); // удаление элемента в начале 
arr.unshift(1); // добавление элемента в начале 
console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


arr.forEach(function(item, i, mass){

    console.log(i + ': ' + item + ' (массив: ' + mass + ')');

});

//console.log(arr);

let mass = [1, 2, 3, 4, 7, 8];

for (let key of mass) {
    console.log(key);
}


let answer = prompt('', ''),
    array = [];

 array = answer.split(', ');
 console.log(array);

 

 let newArray = ['sfas', 'aadfsaff', 'ывфаfdgsghh'],
     i = newArray.join(', '); // переобразовывает массив в строку 

     console.log(i);

     i = newArray.sort(); //сортирует элементы по алфавиту
     console.log(newArray);

     let newArray2 = [1, 15, 4, 152, 40];
     i = newArray2.sort(compareNum);
     
     function compareNum(a, b) {
         return a - b;
     }
     console.log(newArray2);


     let soldier = {
         health: 400,
         armor: 100
     };

     let john = {
         health: 100
     };


     john.__proto__ = soldier;
     console.log(john);
     console.log(john.armor);