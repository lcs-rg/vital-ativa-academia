const repository = require('./repository');
class MatriculaService {
  async getAll() { return await repository.findAll(); }
  async getById(id) { const matricula = await repository.findById(id); if (!matricula) throw new Error('Matrícula não encontrada'); return matricula; }
  async create(data) { return await repository.create(data); }
  async update(id, data) { const matricula = await repository.findById(id); if (!matricula) throw new Error('Matrícula não encontrada'); return await repository.update(id, data); }
  async delete(id) { const matricula = await repository.findById(id); if (!matricula) throw new Error('Matrícula não encontrada'); await repository.delete(id); }
}
module.exports = new MatriculaService();