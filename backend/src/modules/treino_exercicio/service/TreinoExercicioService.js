const repository = require('../repository/TreinoExercicioRepository');
const TreinoExercicio = require('../entity/TreinoExercicio');
class TreinoExercicioService {
  async getAll() { return repository.findAll(); }
  async getByTreino(treinoId) { return repository.findByTreino(treinoId); }
  async create(data) { const te = new TreinoExercicio(data); const errors = te.validate(); if (errors.length > 0) { const err = new Error(errors.join(', ')); err.status = 400; throw err; } return repository.create(te); }
}
module.exports = new TreinoExercicioService();