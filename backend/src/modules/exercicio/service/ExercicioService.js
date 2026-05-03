const repository = require('../repository/ExercicioRepository');
class ExercicioService {
  async getAll() { return repository.findAll(); }
  async getById(id) { const e = await repository.findById(id); if (!e) { const err = new Error('Exercício não encontrado'); err.status = 404; throw err; } return e; }
  async create(data) { const Exercicio = require('../entity/Exercicio'); const e = new Exercicio(data); const errors = e.validate(); if (errors.length > 0) { const err = new Error(errors.join(', ')); err.status = 400; throw err; } return repository.create(e); }
  async delete(id) { return repository.remove(id); }
}
module.exports = new ExercicioService();