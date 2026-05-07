const repository = require('./repository');
class ExercicioService {
  async getAll() { return await repository.findAll(); }
  async getById(id) { const exercicio = await repository.findById(id); if (!exercicio) throw new Error('Exercício não encontrado'); return exercicio; }
  async create(data) { return await repository.create(data); }
  async update(id, data) { const exercicio = await repository.findById(id); if (!exercicio) throw new Error('Exercício não encontrado'); return await repository.update(id, data); }
  async delete(id) { const exercicio = await repository.findById(id); if (!exercicio) throw new Error('Exercício não encontrado'); await repository.delete(id); }
}
module.exports = new ExercicioService();