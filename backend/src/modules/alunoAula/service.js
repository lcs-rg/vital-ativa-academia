const repository = require('./repository');

class AlunoAulaService {
  async getAll() {
    return await repository.findAll();
  }

  async create(data) {
    if (!data.aluno_id_aluno || !data.aula_id_aula) {
      throw new Error('aluno_id_aluno e aula_id_aula são obrigatórios');
    }
    return await repository.create(data);
  }

  async delete(data) {
    if (!data.aluno_id_aluno || !data.aula_id_aula) {
      throw new Error('aluno_id_aluno e aula_id_aula são obrigatórios');
    }
    await repository.delete(data.aluno_id_aluno, data.aula_id_aula);
  }
}

module.exports = new AlunoAulaService();