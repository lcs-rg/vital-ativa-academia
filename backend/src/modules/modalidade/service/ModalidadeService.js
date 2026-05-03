const repository = require('../repository/ModalidadeRepository');
class ModalidadeService {
  async getAll() { return repository.findAll(); }
  async getById(id) { const m = await repository.findById(id); if (!m) { const e = new Error('Modalidade não encontrada'); e.status = 404; throw e; } return m; }
  async create(data) { const Modalidade = require('../entity/Modalidade'); const m = new Modalidade(data); const errors = m.validate(); if (errors.length > 0) { const e = new Error(errors.join(', ')); e.status = 400; throw e; } return repository.create(m); }
}
module.exports = new ModalidadeService();