/*if (1) {
    console.log(true);
} else {
    console.log(false);
}
*/

let num = 50;

if (num<49) {
    console.log(false);
} else if (num>100) {
    console.log("so many");
} else {
    console.log(true);
}

//второй вариант

(num == 50) ? console.log("true") : console.log("false");

//третий вариант 

switch (num) {
    case num < 49:
        console.log(false);
        break;
    case num >100:
        console.log("so many");
        break;
    case 50:
        console.log(true);
        break; 
    default:
        console.log("something went wrang");   

}