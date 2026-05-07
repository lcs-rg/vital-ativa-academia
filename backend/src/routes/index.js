const express = require('express');
const router = express.Router();

const createGenericRoutes = require('./planoRoutes');
const instrutorRoutes = require('./instrutorRoutes');
const modalidadeRoutes = require('./modalidadeRoutes');
const exercicioRoutes = require('./exercicioRoutes');
const avaliacaoRoutes = require('./avaliacaoRoutes');
const matriculaRoutes = require('./matriculaRoutes');
const pagamentoRoutes = require('./pagamentoRoutes');
const aulaRoutes = require('./aulaRoutes');
const treinoRoutes = require('./treinoRoutes');
const alunoAulaRoutes = require('./alunoAulaRoutes');
const treinoExercicioRoutes = require('./treinoExercicioRoutes');
const planoModalidadeRoutes = require('./planoModalidadeRoutes');

router.use('/alunos', createGenericRoutes());
router.use('/planos', createGenericRoutes());
router.use('/instrutores', instrutorRoutes);
router.use('/modalidades', modalidadeRoutes);
router.use('/exercicios', exercicioRoutes);
router.use('/avaliacoes', avaliacaoRoutes);
router.use('/matriculas', matriculaRoutes);
router.use('/pagamentos', pagamentoRoutes);
router.use('/aulas', aulaRoutes);
router.use('/treinos', treinoRoutes);
router.use('/aluno-aula', alunoAulaRoutes);
router.use('/treino-exercicio', treinoExercicioRoutes);
router.use('/plano-modalidade', planoModalidadeRoutes);

module.exports = router;