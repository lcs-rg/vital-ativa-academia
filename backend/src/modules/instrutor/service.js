const repository = require('./repository');

class InstrutorService {
  async getAll() { return await repository.findAll(); }
  async getById(id) {
    const instrutor = await repository.findById(id);
    if (!instrutor) throw new Error('Instrutor não encontrado');
    return instrutor;
  }
  async create(data) { return await repository.create(data); }
  async update(id, data) {
    const instrutor = await repository.findById(id);
    if (!instrutor) throw new Error('Instrutor não encontrado');
    return await repository.update(id, data);
  }
  async delete(id) {
    const instrutor = await repository.findById(id);
    if (!instrutor) throw new Error('Instrutor não encontrado');
    await repository.delete(id);
  }
}

module.exports = new InstrutorService();