const express = require('express');
const router = express.Router();

const alunoRoutes = require('../modules/aluno/routes');
const planoRoutes = require('../modules/plano/routes');
const instrutorRoutes = require('../modules/instrutor/routes');
const modalidadeRoutes = require('../modules/modalidade/routes');
const exercicioRoutes = require('../modules/exercicio/routes');
const avaliacaoRoutes = require('../modules/avaliacao/routes');
const matriculaRoutes = require('../modules/matricula/routes');
const pagamentoRoutes = require('../modules/pagamento/routes');
const aulaRoutes = require('../modules/aula/routes');
const treinoRoutes = require('../modules/treino/routes');
const alunoAulaRoutes = require('../modules/alunoAula/routes');
const treinoExercicioRoutes = require('../modules/treinoExercicio/routes');
const planoModalidadeRoutes = require('../modules/planoModalidade/routes');
const solicitacaoMatriculaRoutes = require('../modules/solicitacaoMatricula/routes');

router.use('/alunos', alunoRoutes);
router.use('/planos', planoRoutes);
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
router.use('/solicitacoes-matricula', solicitacaoMatriculaRoutes);

module.exports = router;