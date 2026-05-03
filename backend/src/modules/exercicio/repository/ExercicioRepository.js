const pool = require('../../../config/database');
class ExercicioRepository {
  async findAll() { const [rows] = await pool.execute('SELECT * FROM exercicio ORDER BY nome ASC'); return rows; }
  async findById(id) { const [rows] = await pool.execute('SELECT * FROM exercicio WHERE id_exercicio = ?', [id]); return rows[0] || null; }
  async create(exercicio) { const [result] = await pool.execute('INSERT INTO exercicio (nome, descricao) VALUES (?, ?)', [exercicio.nome, exercicio.descricao]); return result.insertId; }
  async remove(id) { const [result] = await pool.execute('DELETE FROM exercicio WHERE id_exercicio = ?', [id]); return result.affectedRows; }
}
module.exports = new ExercicioRepository();