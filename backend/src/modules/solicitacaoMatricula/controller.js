const service = require('./service');
class SolicitacaoMatriculaController {
  async getAll(req, res, next) { try { res.json(await service.getAll()); } catch (error) { next(error); } }
  async getById(req, res, next) { try { res.json(await service.getById(req.params.id)); } catch (error) { if (error.message === 'Solicitação não encontrada') return res.status(404).json({ error: error.message }); next(error); } }
  async create(req, res, next) { try { res.status(201).json(await service.create(req.body)); } catch (error) { if (error.message.includes('Campos obrigatórios') || error.message.includes('inválido')) return res.status(400).json({ error: error.message }); next(error); } }
}
module.exports = new SolicitacaoMatriculaController();