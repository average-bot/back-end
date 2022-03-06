const express = require('express');
const router = express.Router();
//const faker = require('@faker-js/faker').default;
const axios = require('axios').default; //used to make HTTP requests from node
const crack = require('../crack');



// Json to the teachers blog
// http://localhost:1337/api/teacher
router.get('/teacher', async (req, res) => {
    try {
        const response = await axios.get('https://tenkaklet.com/blog'); // get error by adding something at the end
        const posts = await response.data;
        res.json(posts);
    } catch (error) {
        res.status(500).json(error.message); //.send() instead of .json()
    }
});

// Generates a random password
// http://localhost:1337/api/generate
router.get('/generate', (req, res) => {
    //pw = [];
    let password = crack.password.create_word();
    let tries = crack.password.get_tries(password.length, 26);
    //pw.push(password);
    //pw.push(tries);
    //res.json(pw);
    res.json({ pw: password, tries: tries });
});


// Generate 20 different passwords
// http://localhost:1337/api/random20
router.get('/random20', (req, res) => {
    const pws = [];
    for (let i = 0; i < 20; i++) {
        pws.push(crack.password.create_word());
    }
    res.json(pws);
});


module.exports = router;