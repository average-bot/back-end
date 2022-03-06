const express = require('express');
const router = express.Router();
//const faker = require('@faker-js/faker').default;
const axios = require('axios').default; //used to make HTTP requests from node
//const crack = require('../crack');




// Shows a new html page with "info"
// http://localhost:1337/info
router.get('/', (req, res) => {
    res.sendFile(`${process.cwd()}/public/more.html`);
});


module.exports = router;