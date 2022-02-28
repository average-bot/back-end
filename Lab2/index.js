// Imports
const crack = require('./crack');
const express = require('express');

const application = express();
const PORT = process.env.PORT || 1337;
const morgan = require('morgan');

// Middleware Morgan
application.use(morgan('dev'));

const api = require('./routes/api'); // this is external route to out OWN API. Our module
application.use(express.json()); // Enables the use of json
application.use('/api', api); // this will be the endpoint for out API


//open am html file from public
application.use(express.static('public')); // Public will be the client side of out WebApp
// http://localhost:1234/


//Listen to the PORT
application.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});




/*
// Import
const crack = require('./crack');


console.log('Hello and welcome to the custom password maker!');

const word = crack.password.create_word();
console.log('Here is your custom password :', word);
let length = word.length;
// will use 26 since there can be 26 letters from the alphabet
let tries = crack.password.get_tries(length, 26);
console.log('This might take ', tries, 'to crack if it may contain all the letters from the english alphabet (26 letters). You can choose to use it if you want =)');
*/


