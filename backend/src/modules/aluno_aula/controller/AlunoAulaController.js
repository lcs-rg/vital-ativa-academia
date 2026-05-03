const service = require('../service/AlunoAulaService');
class AlunoAulaController {
  async getAll(req, res) { try { res.status(200).json(await service.getAll()); } catch (error) { res.status(500).json({ error: error.message }); } }
  async getByAula(req, res) { try { res.status(200).json(await service.getByAula(req.params.aulaId)); } catch (error) { res.status(500).json({ error: error.message }); } }
  async getByAluno(req, res) { try { res.status(200).json(await service.getByAluno(req.params.alunoId)); } catch (error) { res.status(500).json({ error: error.message }); } }
  async create(req, res) { try { const id = await service.create(req.body); res.status(201).json({ id, message: 'Inscrição criada com sucesso' }); } catch (error) { res.status(error.status || 500).json({ error: error.message }); } }
}
module.exports = new AlunoAulaController();