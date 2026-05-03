const repository = require('../repository/PagamentoRepository');
class PagamentoService {
  async getAll() { return repository.findAll(); }
  async getById(id) { const p = await repository.findById(id); if (!p) { const err = new Error('Pagamento não encontrado'); err.status = 404; throw err; } return p; }
  async getByMatricula(matriculaId) { return repository.findByMatricula(matriculaId); }
  async create(data) { const Pagamento = require('../entity/Pagamento'); const p = new Pagamento(data); const errors = p.validate(); if (errors.length > 0) { const err = new Error(errors.join(', ')); err.status = 400; throw err; } return repository.create(p); }
}
module.exports = new PagamentoService();