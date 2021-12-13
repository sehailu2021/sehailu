const express = require('express');

const router = express.Router({
    "caseSensitive": false,
    "strict": false
});


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'user.html'))
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.fname, req.body.lname);
    res.end('Done...');
});

module.exports = router;