// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';  is much better than the older way below

// Same as above 
// const sayHello = function() {
  //return 'Hello';
//}
 
// Return object
// const sayHello = () => ({ msg: 'Hello' }); // object literal will need to be wrapped in parentheses () as shown

// Single parameter does not need parentheses
// const sayHello = name => console.log(`Hello ${name}`);

// Two parameters requires parentheses
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Max', 'Lowe');

const users = ['Nathan', 'John', 'William'];

//const nameLengths = users.map(function(name) {
  //return name.length;
//});

// Shorter with => 
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);