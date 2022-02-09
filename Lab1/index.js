// Import
const lab = require('./crack');


console.log('Hello and welcome to the custom password maker!');

const word = lab.password.create_word();
console.log('Here is your custom password :', word);
let length = word.length;
// will use 26 since there can be 26 letters from the alphabet
let tries = lab.password.get_tries(length, 26);
console.log('This might take ', tries, 'to crack if it may contain all the letters from the english alphabet (26 letters). You can choose to use it if you want =)');