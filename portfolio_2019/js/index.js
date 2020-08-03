/*
const todos = [
  {
    id: 1,
    text: 'take out trash',
    isComplete: false,
    duration: '10 minutes'
  },
  {
    id: 2,
    text: 'laundry',
    isComplete: false,
    duration: '2 hours'
  },
  {
    id: 3,
    text: 'reading',
    isComplete: true,
    duration: '3 hours'
  },
  {
    id: 4,
    text: 'homework',
    isComplete: true,
    duration: '3 hours'
  }
];

// For loops
// for (let i = 0; i < 3; i++) {
//   console.log(todos[i].duration);
// }

// iterate loops
// for (let todo of todos) {
//   console.log(todo.name);
// }

// forEach
// todos.forEach(function(todo){
//   console.log(todo.text);
// });

// map returns an array
const todoText = todos.map(function(todo){
  return todo.text;
});

console.log(todoText);

// filter out then map (turns in to array) just the filtered content
const todoCompleted = todos.filter(function(todo){
  return todo.isComplete === true;
}).map(function(todo) {
  return todo.text;
});

console.log(todoCompleted);
*/

const x = 20;

// the color is red if x is greater then 10, if not then it is blue
const color = x > 10 ? 'red' : 'blue';

// if statements
// if (x == '20') {
//   console.log('x is 20');
// } else {
//   console.log('x is not 20');
// }

// switch case
// switch(color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is not red or blue');
//     break;
// };

// arrow function
// const addNums = (num1 = 1, num2 = 1) => num1 + num2
// console.log(addNums(3, 5));

// constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// };

// Person.prototype.getBirthYear = function() {
//   return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
  
// }

// Class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   };

//   getBirthYear() {
//     return this.dob.getFullYear();
//   };

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// // instantiate object
// const person1 = new Person('John', 'Kim', '06-13-1997');

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// console.log(person1);
