

let option = {

    width: 1024,
    height: 1024, 
    name: "test"
};

console.log(option.name);
option.bool = false;

option.colors = {
    border: "black",
    background: "red"

};

delete option.bool;

console.log(option);

for (let key in option) {
    
    console.log('Свойство ' + key + ' имеет значение ' + option[key]);
}

console.log(Object.keys(option).length);
