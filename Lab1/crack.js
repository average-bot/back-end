// Create a random password suggestion and calculate the number of times it would take to crack.

// Import chance. Source: https://www.npmjs.com/package/chance
const chance = require('chance');

// Generates a random word consisting of x amount of letters from the english alphabet(26 letters).
function create_word() {
    return chance().word();
}

// Calculates the maximum number of tries to crack the password.
function get_tries(length, diff_characters) {
    return diff_characters ** length;
}


// Exports the methods so that they can be used in other files.
exports.password = { create_word, get_tries };