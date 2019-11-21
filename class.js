
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
        this.hello = function () {
            console.log('Hello ' + this.name);
        };
    }
    exit(name) {
        console.log('Пользователь ' + this.name + ' ушел');
    }
}


let ivan = new User('Ivan', 25);
let alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);


ivan.exit();