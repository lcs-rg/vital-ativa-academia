const repository = require('../repository/TreinoRepository');
const Treino = require('../entity/Treino');
class TreinoService {
  async getAll() { return repository.findAll(); }
  async getById(id) { const t = await repository.findById(id); if (!t) { const err = new Error('Treino não encontrado'); err.status = 404; throw err; } return t; }
  async getByAluno(alunoId) { return repository.findByAluno(alunoId); }
  async create(data) { const t = new Treino(data); const errors = t.validate(); if (errors.length > 0) { const err = new Error(errors.join(', ')); err.status = 400; throw err; } return repository.create(t); }
}
module.exports = new TreinoService();