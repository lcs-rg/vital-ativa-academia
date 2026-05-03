const repository = require('../repository/MatriculaRepository');
class MatriculaService {
  async getAll() { return repository.findAll(); }
  async getById(id) { const m = await repository.findById(id); if (!m) { const err = new Error('Matrícula não encontrada'); err.status = 404; throw err; } return m; }
  async getByAluno(alunoId) { return repository.findByAluno(alunoId); }
  async create(data) { const Matricula = require('../entity/Matricula'); const m = new Matricula(data); const errors = m.validate(); if (errors.length > 0) { const err = new Error(errors.join(', ')); err.status = 400; throw err; } return repository.create(m); }
}
module.exports = new MatriculaService();