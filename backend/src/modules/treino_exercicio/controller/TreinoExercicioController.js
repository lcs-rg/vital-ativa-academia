const service = require('../service/TreinoExercicioService');
class TreinoExercicioController {
  async getAll(req, res) { try { res.status(200).json(await service.getAll()); } catch (error) { res.status(500).json({ error: error.message }); } }
  async getByTreino(req, res) { try { res.status(200).json(await service.getByTreino(req.params.treinoId)); } catch (error) { res.status(500).json({ error: error.message }); } }
  async create(req, res) { try { const id = await service.create(req.body); res.status(201).json({ id, message: 'Exercício adicionado ao treino' }); } catch (error) { res.status(error.status || 500).json({ error: error.message }); } }
}
module.exports = new TreinoExercicioController();