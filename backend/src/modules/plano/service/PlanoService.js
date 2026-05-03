const repository = require('../repository/PlanoRepository');

class PlanoService {
  async getAll() {
    return repository.findAll();
  }

  async getById(id) {
    const plano = await repository.findById(id);
    if (!plano) {
      const error = new Error('Plano não encontrado');
      error.status = 404;
      throw error;
    }
    return plano;
  }

  async create(data) {
    const Plano = require('../entity/Plano');
    const plano = new Plano(data);
    const errors = plano.validate();
    if (errors.length > 0) {
      const error = new Error(errors.join(', '));
      error.status = 400;
      throw error;
    }
    return repository.create(plano);
  }
}

module.exports = new PlanoService();