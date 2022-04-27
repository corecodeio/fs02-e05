/**
 *
 * objects
 * string literals (string templates)
 * dom api
 * arrow functions
 * array | object destructoring
 * rest / spread operator
 *
 */

// function sum(a, b) {
//   return a + b;
// }

// let numbers = [1, true, 3, undefined, null, [1, 3, 4], sum, 'str'];
// let numbers2 = [];

// let result = numbers[6](5, 4);

// let myObject = {
//   terror: ['lorem', 'ipsum'],
//   luckyNumber: 7,
//   password: 'user',
//   myFunct: sum,
//   88: ['hola', 89],
//   other: {
//     yosef: 'Ivan',
//     age: 26,
//   },
// };

// let myObject2 = {};

// console.log(myObject['password']);
// console.log(myObject.password);

// console.log(myObject[88]);

// console.log(myObject['myFunct'](7, 3));

// myObject.other.age = 28;

// console.log(myObject.other.age);
// console.log(myObject);

// myObject[88][1] = 90;

// console.log(myObject[88]);

// console.log(myObject);

function something() {
  return 'HOolaaaaa';
}

function showMessage() {
  let name = document.getElementById('input1').value;
  let lastName = document.getElementById('input2').value;
  let fullName = `${name} ${lastName}`;

  let resultSection = document.querySelector('.result-section');
  resultSection.removeAttribute('hidden');

  let h1 = resultSection.children[0];
  h1.innerHTML = fullName;
}
