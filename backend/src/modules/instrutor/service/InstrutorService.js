const repository = require('../repository/InstrutorRepository');

class InstrutorService {
  async getAll() { return repository.findAll(); }
  async getById(id) {
    const instrutor = await repository.findById(id);
    if (!instrutor) {
      const error = new Error('Instrutor não encontrado');
      error.status = 404;
      throw error;
    }
    return instrutor;
  }
  async create(data) {
    const Instrutor = require('../entity/Instrutor');
    const instrutor = new Instrutor(data);
    const errors = instrutor.validate();
    if (errors.length > 0) {
      const error = new Error(errors.join(', '));
      error.status = 400;
      throw error;
    }
    return repository.create(instrutor);
  }
}

module.exports = new InstrutorService();