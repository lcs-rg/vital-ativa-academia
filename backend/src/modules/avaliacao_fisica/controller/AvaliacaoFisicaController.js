const service = require('../service/AvaliacaoFisicaService');
class AvaliacaoFisicaController {
  async getAll(req, res) { try { res.status(200).json(await service.getAll()); } catch (error) { res.status(500).json({ error: error.message }); } }
  async getById(req, res) { try { res.status(200).json(await service.getById(req.params.id)); } catch (error) { res.status(error.status || 500).json({ error: error.message }); } }
  async getByAluno(req, res) { try { res.status(200).json(await service.getByAluno(req.params.alunoId)); } catch (error) { res.status(500).json({ error: error.message }); } }
  async create(req, res) { try { const id = await service.create(req.body); res.status(201).json({ id, message: 'Avaliação criada com sucesso' }); } catch (error) { res.status(error.status || 500).json({ error: error.message }); } }
}
module.exports = new AvaliacaoFisicaController();