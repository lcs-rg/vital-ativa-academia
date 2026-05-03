const express = require('express');
const alunoRoutes = require('../modules/aluno/routes/alunoRoutes');
const planoRoutes = require('../modules/plano/routes/planoRoutes');
const instrutorRoutes = require('../modules/instrutor/routes/instrutorRoutes');
const modalidadeRoutes = require('../modules/modalidade/routes/modalidadeRoutes');
const exercicioRoutes = require('../modules/exercicio/routes/exercicioRoutes');
const avaliacaoRoutes = require('../modules/avaliacao_fisica/routes/avaliacao_fisicaRoutes');
const matriculaRoutes = require('../modules/matricula/routes/matriculaRoutes');
const pagamentoRoutes = require('../modules/pagamento/routes/pagamentoRoutes');
const aulaRoutes = require('../modules/aula/routes/aulaRoutes');
const treinoRoutes = require('../modules/treino/routes/treinoRoutes');
const alunoAulaRoutes = require('../modules/aluno_aula/routes/aluno_aulaRoutes');
const treinoExercicioRoutes = require('../modules/treino_exercicio/routes/treino_exercicioRoutes');
const planoModalidadeRoutes = require('../modules/plano_modalidade/routes/plano_modalidadeRoutes');

const router = express.Router();

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

module.exports = router;