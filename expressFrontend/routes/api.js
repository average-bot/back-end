const express = require('express');
const router = express.Router();
const faker = require('@faker-js/faker').default;
const axios = require('axios').default;

// http://localhost:1234/api
router.get('/', (req, res) => {
    const names = [];
    for (let i = 0; i < 20; i++) {
        names.push(faker.name.firstName());
    }
    res.json(names);
});
// http://localhost:1234/api/countries
router.get('/countries', (req, res) => {
    const countries = [];
    for (let i = 0; i < 20; i++) {
        countries.push(faker.address.country());
    }
    res.json(countries);
});


// http://localhost:1234/api/posts
router.get('/posts', async (req, res) => {
    try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts'); // get error by adding something at the end
        const posts = await response.data;
        res.json(posts);
    } catch (error) {
        res.status(500).json(error.message); //.send() instead of .json()
    }
});




module.exports = router;