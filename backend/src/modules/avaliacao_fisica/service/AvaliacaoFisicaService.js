const repository = require('../repository/AvaliacaoFisicaRepository');
class AvaliacaoFisicaService {
  async getAll() { return repository.findAll(); }
  async getById(id) { const a = await repository.findById(id); if (!a) { const err = new Error('Avaliação não encontrada'); err.status = 404; throw err; } return a; }
  async getByAluno(alunoId) { return repository.findByAluno(alunoId); }
  async create(data) { const AvaliacaoFisica = require('../entity/AvaliacaoFisica'); const a = new AvaliacaoFisica(data); const errors = a.validate(); if (errors.length > 0) { const err = new Error(errors.join(', ')); err.status = 400; throw err; } return repository.create(a); }
}
module.exports = new AvaliacaoFisicaService();