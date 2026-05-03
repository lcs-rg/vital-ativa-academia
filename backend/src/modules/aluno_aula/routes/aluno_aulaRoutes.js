const express = require('express');
const controller = require('../controller/AlunoAulaController');
const router = express.Router();
router.get('/', controller.getAll);
router.get('/aula/:aulaId', controller.getByAula);
router.get('/aluno/:alunoId', controller.getByAluno);
router.post('/', controller.create);
module.exports = router;