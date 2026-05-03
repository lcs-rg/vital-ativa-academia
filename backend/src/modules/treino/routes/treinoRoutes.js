const express = require('express');
const controller = require('../controller/TreinoController');
const router = express.Router();
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/aluno/:alunoId', controller.getByAluno);
router.post('/', controller.create);
module.exports = router;