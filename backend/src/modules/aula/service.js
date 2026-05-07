const repository = require('./repository');
class AulaService {
  async getAll() { return await repository.findAll(); }
  async getById(id) { const aula = await repository.findById(id); if (!aula) throw new Error('Aula não encontrada'); return aula; }
  async create(data) { return await repository.create(data); }
  async update(id, data) { const aula = await repository.findById(id); if (!aula) throw new Error('Aula não encontrada'); return await repository.update(id, data); }
  async delete(id) { const aula = await repository.findById(id); if (!aula) throw new Error('Aula não encontrada'); await repository.delete(id); }
}
module.exports = new AulaService();