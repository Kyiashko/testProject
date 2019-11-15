let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);


box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}

heart.forEach(function(item, i, hearts) {

    item.style.backgroundColor = 'blue';

})



let div = document.createElement('div'),
    text = document.createTextNode('This is text');

console.log(div);
console.log(text);

div.classList.add('black'); //add class for element

document.body.appendChild(div); // перенос элемента в конец body

wrapper.appendChild(div); // вставить элемент в конце блока wrapper

document.body.insertBefore(div, circle[0]); // вставить элемент div перед элементом circle

document.removeChild(circle[1]); // удалить элемент 

document.body.replaceChild(btn[1], citcle[1]); // заменить элемент circle элементом btn




div.innerHTML = '<h1>Hello world!</h1>'; // add smth in element

div.textContent = 'Hello world!'; //add text in element