
let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function () {
//     alert('You click on first button');
// }

// btn[0].addEventListener('click', function() {
//     alert('You click on first button');
//     alert('You again click on first button');
// });

// btn[0].addEventListener('mouseenter', function() {

//     alert("Вы навели на первую кнопку");
// });


btn[0].addEventListener('click', function(event) {
   
//     console.log(event);
//    let target = event.target;
//    target.style.display = "none";
    console.log('Произошло событие ' + event.type + 
   ' на элементе' + event.target);
});

wrap.addEventListener('click', function (params) {
    console.log('Произошло событие ' + event.type + 
    ' на элементе' + event.target);
});

link.addEventListener("click", function (event) {
    event.preventDefault(); //отменяет событие 
    console.log('Произошло событие ' + event.type + 
    ' на элементе' + event.target);
});

btn.forEach(function (item) {
    item.addEventListener("mouseleave", function () {
        console.log('Exit');
    });
}
    
);