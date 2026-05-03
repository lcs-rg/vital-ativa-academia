const express = require('express');
const controller = require('../controller/AlunoController');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);

module.exports = router;