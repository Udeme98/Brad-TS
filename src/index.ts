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
console.log(firstUser);
