const express = require('express');

const app = express();
const PORT = process.env.PORT || 1234;
const morgan = require('morgan');

// Middleware Morgan
app.use(morgan('dev'));

const api = require('./routes/api'); // this is external route to out OWN API. Our module
app.use(express.json()); // Enables the use of json
app.use('/api', api); // this will be the endpoint for out API


//open am html file from public
app.use(express.static('public')); // Public will be the client side of out WebApp
// http://localhost:1234/


//Listen to the PORT
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});






