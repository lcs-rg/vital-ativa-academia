const express = require('express');
const controller = require('../controller/TreinoExercicioController');
const router = express.Router();
router.get('/', controller.getAll);
router.get('/treino/:treinoId', controller.getByTreino);
router.post('/', controller.create);
module.exports = router;