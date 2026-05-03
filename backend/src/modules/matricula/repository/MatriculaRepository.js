const pool = require('../../../config/database');
class MatriculaRepository {
  async findAll() { const [rows] = await pool.execute('SELECT * FROM matricula ORDER BY data_inicio DESC'); return rows; }
  async findById(id) { const [rows] = await pool.execute('SELECT * FROM matricula WHERE id_matricula = ?', [id]); return rows[0] || null; }
  async findByAluno(alunoId) { const [rows] = await pool.execute('SELECT * FROM matricula WHERE aluno_id_aluno = ?', [alunoId]); return rows; }
  async create(matricula) { const [result] = await pool.execute('INSERT INTO matricula (data_inicio, data_fim, status, aluno_id_aluno, plano_id_plano) VALUES (?, ?, ?, ?, ?)', [matricula.data_inicio, matricula.data_fim, matricula.status, matricula.aluno_id_aluno, matricula.plano_id_plano]); return result.insertId; }
}
module.exports = new MatriculaRepository();