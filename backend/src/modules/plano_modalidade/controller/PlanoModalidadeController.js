const service = require('../service/PlanoModalidadeService');
class PlanoModalidadeController {
  async getAll(req, res) { try { res.status(200).json(await service.getAll()); } catch (error) { res.status(500).json({ error: error.message }); } }
  async getByPlano(req, res) { try { res.status(200).json(await service.getByPlano(req.params.planoId)); } catch (error) { res.status(500).json({ error: error.message }); } }
  async create(req, res) { try { const id = await service.create(req.body); res.status(201).json({ id, message: 'Modalidade vinculada ao plano' }); } catch (error) { res.status(error.status || 500).json({ error: error.message }); } }
}
module.exports = new PlanoModalidadeController();