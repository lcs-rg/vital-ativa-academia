const pool = require('../../../config/database');
class TreinoExercicioRepository {
  async findAll() { const [rows] = await pool.execute('SELECT * FROM treino_exercicio'); return rows; }
  async findByTreino(treinoId) { const [rows] = await pool.execute('SELECT * FROM treino_exercicio WHERE treino_id_treino = ?', [treinoId]); return rows; }
  async create(data) { const [result] = await pool.execute('INSERT INTO treino_exercicio (series, repeticoes, treino_id_treino, exercicio_id_exercicio) VALUES (?, ?, ?, ?)', [data.series, data.repeticoes, data.treino_id_treino, data.exercicio_id_exercicio]); return result.insertId; }
}
module.exports = new TreinoExercicioRepository();