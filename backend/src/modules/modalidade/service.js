const repository = require('./repository');

class ModalidadeService {
  async getAll() { return await repository.findAll(); }
  async getById(id) {
    const modalidade = await repository.findById(id);
    if (!modalidade) throw new Error('Modalidade não encontrada');
    return modalidade;
  }
  async create(data) { return await repository.create(data); }
  async update(id, data) {
    const modalidade = await repository.findById(id);
    if (!modalidade) throw new Error('Modalidade não encontrada');
    return await repository.update(id, data);
  }
  async delete(id) {
    const modalidade = await repository.findById(id);
    if (!modalidade) throw new Error('Modalidade não encontrada');
    await repository.delete(id);
  }
}
module.exports = new ModalidadeService();