const repository = require('../repository/PlanoModalidadeRepository');
const PlanoModalidade = require('../entity/PlanoModalidade');
class PlanoModalidadeService {
  async getAll() { return repository.findAll(); }
  async getByPlano(planoId) { return repository.findByPlano(planoId); }
  async create(data) { const pm = new PlanoModalidade(data); const errors = pm.validate(); if (errors.length > 0) { const err = new Error(errors.join(', ')); err.status = 400; throw err; } return repository.create(pm); }
}
module.exports = new PlanoModalidadeService();