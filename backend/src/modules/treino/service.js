const repository = require('./repository');
class TreinoService {
  async getAll() { return await repository.findAll(); }
  async getById(id) { const treino = await repository.findById(id); if (!treino) throw new Error('Treino não encontrado'); return treino; }
  async create(data) { return await repository.create(data); }
  async update(id, data) { const treino = await repository.findById(id); if (!treino) throw new Error('Treino não encontrado'); return await repository.update(id, data); }
  async delete(id) { const treino = await repository.findById(id); if (!treino) throw new Error('Treino não encontrado'); await repository.delete(id); }
}
module.exports = new TreinoService();