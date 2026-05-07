const repository = require('./repository');

class PlanoModalidadeService {
  async getAll() {
    return await repository.findAll();
  }

  async create(data) {
    if (!data.plano_id_plano || !data.modalidade_id_modalidade) {
      throw new Error('plano_id_plano e modalidade_id_modalidade são obrigatórios');
    }
    return await repository.create(data);
  }

  async delete(data) {
    if (!data.plano_id_plano || !data.modalidade_id_modalidade) {
      throw new Error('plano_id_plano e modalidade_id_modalidade são obrigatórios');
    }
    await repository.delete(data.plano_id_plano, data.modalidade_id_modalidade);
  }
}

module.exports = new PlanoModalidadeService();