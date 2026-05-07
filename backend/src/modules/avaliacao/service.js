const repository = require('./repository');

class AvaliacaoService {
  async getAll() {
    return await repository.findAll();
  }

  async getById(id) {
    const avaliacao = await repository.findById(id);
    if (!avaliacao) {
      throw new Error('Avaliação não encontrada');
    }
    return avaliacao;
  }

  async create(data) {
    if (!data.aluno_id_aluno) {
      throw new Error('aluno_id_aluno é obrigatório');
    }
    return await repository.create(data);
  }

  async update(id, data) {
    const avaliacao = await repository.findById(id);
    if (!avaliacao) {
      throw new Error('Avaliação não encontrada');
    }
    return await repository.update(id, data);
  }

  async delete(id) {
    const avaliacao = await repository.findById(id);
    if (!avaliacao) {
      throw new Error('Avaliação não encontrada');
    }
    await repository.delete(id);
  }
}

module.exports = new AvaliacaoService();