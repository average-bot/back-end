// Say name
function sayName(name) {
    return 'Hey! ' + name + '! How are you today?';
}

// Show age
function showAge(age) {
    return 'You are ' + age + ' years old!';
}

// Calculate numbers
/* const calc = (num1, num2) => {
    return num1 * num2;
}; */
const calc = (num1, num2) => `number1: ${num1} & number2: ${num2} = ${num1 * num2}`;
/* function calc2(num1, num2) {
    return num1 * num2;
} */
/* const calc = (num1, num2) => num1 * num2; */

// Get avergae of numbers
const average = (num1, num2) => {
    return (num1 + num2) / 2;
};
/* function average2(num1, num2) {
    return (num1 * num2);
} */

exports.name = { sayName, showAge, calc, average };