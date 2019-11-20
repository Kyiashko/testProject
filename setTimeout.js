

let timerId = setTimeout(sayHello, 3000);
clearTimeout(timerId);

let interval = setInterval(sayHello, 3000); 
clearTimeout(interval);
function sayHello() {
    alert('hello world');
}

//рекурсия
let timer = setTimeout(function log() {
    console.log('hello');
    setTimeout(log, 2000);
});

let btn = document.querySelector('button');
let element = document.querySelector('button[2]');


function myAnimation() {
    let position = 0;
    let id = setInterval(frame, 10);

    function frame () {
        if (position==300) {
            clearInterval();
        } else {
            position ++;
            element.style.top = position + 'px';
            element.style.left = position + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);