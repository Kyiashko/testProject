

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('button');

    box.addEventListener('touchstart', function (e) {
        e.preventDefault();
        console.log('red box: touchstart');
        console.log(e.target);
        console.log(e.touches[0].target); //все пальцы прикоснувшиеся к поверхност сенсора
        console.log(e.changedTouches); 
        console.log(e.targetTouches); // регистрация количества пальцев которые работали с обьектом 

    });

    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log('red box: touchmove ' + e.touches[0].pageX);
    });
    
    // box.addEventListener('touchend', function (e) {
    //     e.preventDefault();
    //     console.log('red box: touchend');
    // });
});
