const pool = require('../../../config/database');
class TreinoRepository {
  async findAll() { const [rows] = await pool.execute('SELECT * FROM treino ORDER BY data_criacao DESC'); return rows; }
  async findById(id) { const [rows] = await pool.execute('SELECT * FROM treino WHERE id_treino = ?', [id]); return rows[0] || null; }
  async findByAluno(alunoId) { const [rows] = await pool.execute('SELECT * FROM treino WHERE aluno_id_aluno = ?', [alunoId]); return rows; }
  async create(treino) { const [result] = await pool.execute('INSERT INTO treino (descricao, data_criacao, instrutor_id_Instrutor, aluno_id_aluno) VALUES (?, ?, ?, ?)', [treino.descricao, treino.data_criacao, treino.instrutor_id_Instrutor, treino.aluno_id_aluno]); return result.insertId; }
}
module.exports = new TreinoRepository();