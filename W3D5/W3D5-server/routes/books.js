const express = require('express');
const bookController = require('../controller/bookController');
const router = express.Router();


router.get('/',bookController.getBook);

router.post('/',bookController.createBooks);

router.get('/:bookId',bookController.getBookById);

router.put('/:bookId',bookController.update);

router.delete('/:bookId', bookController.delete)

module.exports = router;