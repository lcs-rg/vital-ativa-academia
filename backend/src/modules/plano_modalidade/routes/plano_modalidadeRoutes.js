const express = require('express');
const controller = require('../controller/PlanoModalidadeController');
const router = express.Router();
router.get('/', controller.getAll);
router.get('/plano/:planoId', controller.getByPlano);
router.post('/', controller.create);
module.exports = router;