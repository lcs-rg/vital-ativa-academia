const express = require('express');
const controller = require('../controller/AulaController');
const router = express.Router();
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/modalidade/:modalidadeId', controller.getByModalidade);
router.post('/', controller.create);
module.exports = router;