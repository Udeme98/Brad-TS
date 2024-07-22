"use strict";
// console.log("Hello TypeScript");
// Basic Types
let num = 1; //Number type
let firstName = "Udeme"; //String type
let isAvailable = true; //Boolean type
let x = 2; //Any type
//Arrays
let nums = [1, 2, 3, 4, 5];
let randomArray = [1, "Udeme", true];
//Tuples
let person = [1, "Joe", true];
//Tuples Array
let employee;
employee = [
    [1, "James"],
    [2, "Sam"],
    [3, "Pete"],
];
//Unions - let's a particular variable hold more than one type
let pId;
pId = 4;
//Enums(Enumerated type)- allows us define a set of named constant(number or string)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["North"] = 0] = "North";
    Direction1[Direction1["East"] = 1] = "East";
    Direction1[Direction1["South"] = 2] = "South";
    Direction1[Direction1["West"] = 3] = "West";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.South);
//objects
//method 1
const user = {
    id: 2,
    surName: "Paul",
};
const firstUser = {
    id: 1,
    name: "Saul",
};
// console.log(firstUser);
//Type assertion- This tells the compiler we want to treat an entity as a different type
let cId = 2;
let customerId = cId; //method 1: changes the type from 'any' to 'number'
let customer2Id = cId; //method 2: changes the type from 'any' to 'number'
//functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(6, 7));
//void - this is used when the function doesn't return a value
function noReturnValue(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    firstName: "Kyle",
};
let player1 = 3;
let somebody1 = {
    id: 2,
    someName: "Sam",
};
const addNum2 = (x, y) => x + y;
// console.log(addNum2(23, 2));
//Classes - used to create objects. constructors[method():function within a class)]
class Person {
    constructor(id, randomName) {
        (this.id = id), (this.randomName = randomName);
    }
    register() {
        return `${this.randomName} is now registered`;
    }
}
const person1 = new Person(2, "Joe");
console.log(person1.register());
console.log(person1);
//Extending a class (subclass)
class Employee extends Person {
    constructor(id, randomName, position) {
        super(id, randomName);
        this.position = position;
    }
}
class People {
    constructor(id, nname) {
        (this.id = id), (this.nname = nname);
    }
    register() {
        return `I am ${this.nname}`;
    }
}
//Generics - Used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(["jon", "sol"]);
