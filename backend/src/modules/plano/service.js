const repository = require('./repository');

class PlanoService {
  async getAll() {
    return await repository.findAll();
  }

  async getById(id) {
    const plano = await repository.findById(id);
    if (!plano) throw new Error('Plano não encontrado');
    return plano;
  }

  async create(data) {
    return await repository.create(data);
  }

  async update(id, data) {
    const plano = await repository.findById(id);
    if (!plano) throw new Error('Plano não encontrado');
    return await repository.update(id, data);
  }

  async delete(id) {
    const plano = await repository.findById(id);
    if (!plano) throw new Error('Plano não encontrado');
    await repository.delete(id);
  }
}

module.exports = new PlanoService();