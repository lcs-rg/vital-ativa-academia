const pool = require('../../../config/database');

class TreinoExercicioRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM treino_exercicio');
    return result.rows;
  }

  async findByTreino(treinoId) {
    const result = await pool.query('SELECT * FROM treino_exercicio WHERE treino_id_treino = $1', [treinoId]);
    return result.rows;
  }

  async create(data) {
    const result = await pool.query(
      'INSERT INTO treino_exercicio (series, repeticoes, treino_id_treino, exercicio_id_exercicio) VALUES ($1, $2, $3, $4) RETURNING (series, repeticoes)',
      [data.series, data.repeticoes, data.treino_id_treino, data.exercicio_id_exercicio]
    );
    return result.rowCount;
  }
}

module.exports = new TreinoExercicioRepository();