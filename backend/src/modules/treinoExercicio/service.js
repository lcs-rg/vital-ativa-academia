const repository = require('./repository');

class TreinoExercicioService {
  async getAll() {
    return await repository.findAll();
  }

  async create(data) {
    if (!data.treino_id_treino || !data.exercicio_id_exercicio) {
      throw new Error('treino_id_treino e exercicio_id_exercicio são obrigatórios');
    }
    return await repository.create(data);
  }

  async delete(data) {
    if (!data.treino_id_treino || !data.exercicio_id_exercicio) {
      throw new Error('treino_id_treino e exercicio_id_exercicio são obrigatórios');
    }
    await repository.delete(data.treino_id_treino, data.exercicio_id_exercicio);
  }
}

module.exports = new TreinoExercicioService();