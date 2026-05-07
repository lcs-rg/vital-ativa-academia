const service = require('./service');
class PagamentoController {
  async getAll(req, res, next) { try { res.json(await service.getAll()); } catch (error) { next(error); } }
  async getById(req, res, next) { try { res.json(await service.getById(req.params.id)); } catch (error) { if (error.message === 'Pagamento não encontrado') return res.status(404).json({ error: error.message }); next(error); } }
  async create(req, res, next) { try { res.status(201).json(await service.create(req.body)); } catch (error) { next(error); } }
  async update(req, res, next) { try { res.json(await service.update(req.params.id, req.body)); } catch (error) { if (error.message === 'Pagamento não encontrado') return res.status(404).json({ error: error.message }); next(error); } }
  async delete(req, res, next) { try { await service.delete(req.params.id); res.status(204).send(); } catch (error) { if (error.message === 'Pagamento não encontrado') return res.status(404).json({ error: error.message }); next(error); } }
}
module.exports = new PagamentoController();