const service = require('../service/AulaService');
class AulaController {
  async getAll(req, res) { try { res.status(200).json(await service.getAll()); } catch (error) { res.status(500).json({ error: error.message }); } }
  async getById(req, res) { try { res.status(200).json(await service.getById(req.params.id)); } catch (error) { res.status(error.status || 500).json({ error: error.message }); } }
  async getByModalidade(req, res) { try { res.status(200).json(await service.getByModalidade(req.params.modalidadeId)); } catch (error) { res.status(500).json({ error: error.message }); } }
  async create(req, res) { try { const id = await service.create(req.body); res.status(201).json({ id, message: 'Aula criada com sucesso' }); } catch (error) { res.status(error.status || 500).json({ error: error.message }); } }
}
module.exports = new AulaController();