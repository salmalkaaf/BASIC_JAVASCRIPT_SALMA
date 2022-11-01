/*
 var person = {
    name: "Salma", 
    age: 41, 
    favColor: "Red",
    height: 160
};

var x = person.age;
var y = person['age'];

// console.log(x);
// console.log(y);
*/

/*
var course = {name: "ayayyaya", lessons: 41};
console.log(course.lessons.length);
*/

/*
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

//different type of console.log
console.log(p1.age); 
console.log(p2.name);

console.log(p1.name + " and "+ p2.name +" loves the color " + p2.favColor)
*/


function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

var p = new person("Billy", 21);
p.changeName("Jessica");

console.log(p.name + ' ' +p.age);

function makan(status, food) {
    this.status = status;  
    this.food = food;
    this.changeName = function (status) {
        this.status = status;
    }
}

var p = new person("Billy", 21);
p.changeName("Jessica");

console.log(p.name + ' ' +p.age);

console.log(p1.status+" makan"+p1.food)

//method change status
//behaviour mengganti nilai properti