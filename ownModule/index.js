/* console.log('Hello there!!!'); */

// Here we import the module
const myModule = require('./myOwnModule');

// Say name
const name = myModule.name.sayName('Sandra');
console.log(name)

// SHow my age
const age = myModule.name.showAge(21);
console.log(age);

// Multiply 2 nums together
const calculate = myModule.name.calc(10, 12);
console.log(calculate);

// Average
const average = myModule.name.average(12, 11);
console.log('the average is ', average);