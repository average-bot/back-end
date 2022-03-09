const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.redirect('/batcave');
});

router.get('/decode', (req, res) =>{

});

module.exports = router;