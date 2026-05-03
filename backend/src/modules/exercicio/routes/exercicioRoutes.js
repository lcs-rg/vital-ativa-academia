const express = require('express');
const controller = require('../controller/ExercicioController');
const router = express.Router();
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.delete('/:id', controller.delete);
module.exports = router;