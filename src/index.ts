// console.log("Hello TypeScript");

// Basic Types
let num: number = 1; //Number type
let firstName: string = "Udeme"; //String type
let isAvailable: boolean = true; //Boolean type
let x: any = 2; //Any type

//Arrays
let nums: number[] = [1, 2, 3, 4, 5];
let randomArray: any[] = [1, "Udeme", true];

//Tuples
let person: [number, string, boolean] = [1, "Joe", true];

//Tuples Array
let employee: [number, string][];
employee = [
  [1, "James"],
  [2, "Sam"],
  [3, "Pete"],
];

//Unions - let's a particular variable hold more than one type
let pId: string | number;
pId = 4;

//Enums(Enumerated type)- allows us define a set of named constant(number or string)
enum Direction1 {
  North, // 0 by default
  East,
  South,
  West,
}
console.log(Direction1.South);

//objects
//method 1
const user: {
  id: number;
  surName: string;
} = {
  id: 2,
  surName: "Paul",
};

//method 2
type User = {
  id: number;
  name: string;
};

const firstUser: User = {
  id: 1,
  name: "Saul",
};
// console.log(firstUser);

//Type assertion- This tells the compiler we want to treat an entity as a different type
let cId: any = 2;
let customerId = <number>cId; //method 1: changes the type from 'any' to 'number'
let customer2Id = cId as number; //method 2: changes the type from 'any' to 'number'

//functions
function addNum(x: number, y: number): number {
  return x + y;
}
// console.log(addNum(6, 7));

//void - this is used when the function doesn't return a value
function noReturnValue(message: string | number) {
  console.log(message);
}
// noReturnValue("Hello world");

//Interfaces- This is like a custom type or a specific structure to an object or a function
interface UserInterface {
  id: number;
  firstName: string;
}

const user1: UserInterface = {
  id: 1,
  firstName: "Kyle",
};

//Difference between a 'type' and 'interface'
// types can be used with primitive and union
type Score = number | string;
let player1: Score = 3;

//Interfaces is best used with an 'object' type
interface Sample {
  readonly id: number; // sets this property to 'readonly'
  someName: string;
  age?: number; // ? makes the property 'optional'
}
let somebody1: Sample = {
  id: 2,
  someName: "Sam",
};

//function interface
interface MathFunc {
  (x: number, y: number): number;
}
const addNum2: MathFunc = (x: number, y: number): number => x + y;
// console.log(addNum2(23, 2));

//Classes - used to create objects. constructors[method():function within a class)]
class Person {
  id: number;
  randomName: string;

  constructor(id: number, randomName: string) {
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
  position: string;

  constructor(id: number, randomName: string, position: string) {
    super(id, randomName);
    this.position = position;
  }
}

//using an interface in a class
interface PersonInterface {
  id: number;
  nname: string;
  register(): string;
}

class People implements PersonInterface {
  id: number;
  nname: string;

  constructor(id: number, nname: string) {
    (this.id = id), (this.nname = nname);
  }

  register(): string {
    return `I am ${this.nname}`;
  }
}

//Generics - Used to build reusable components
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["jon", "sol"]);
