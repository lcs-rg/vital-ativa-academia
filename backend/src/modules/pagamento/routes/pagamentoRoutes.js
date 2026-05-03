const express = require('express');
const controller = require('../controller/PagamentoController');
const router = express.Router();
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/matricula/:matriculaId', controller.getByMatricula);
router.post('/', controller.create);
module.exports = router;