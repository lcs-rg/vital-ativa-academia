const repository = require('./repository');
class PagamentoService {
  async getAll() { return await repository.findAll(); }
  async getById(id) { const pagamento = await repository.findById(id); if (!pagamento) throw new Error('Pagamento não encontrado'); return pagamento; }
  async create(data) { return await repository.create(data); }
  async update(id, data) { const pagamento = await repository.findById(id); if (!pagamento) throw new Error('Pagamento não encontrado'); return await repository.update(id, data); }
  async delete(id) { const pagamento = await repository.findById(id); if (!pagamento) throw new Error('Pagamento não encontrado'); await repository.delete(id); }
}
module.exports = new PagamentoService();