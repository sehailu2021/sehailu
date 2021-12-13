const express = require('express');
const path = require('path');

const router = express.Router({
    "caseSensitive": false,
    "strict": false
});


router.get('/add', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'product.html'));
});

router.post('/add', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.fname, req.body.lname);
    res.end('Done...');
});

router.get('/edit', (req, res, next) => {
    throw new Error('Cannot find ...');
});

module.exports = router;