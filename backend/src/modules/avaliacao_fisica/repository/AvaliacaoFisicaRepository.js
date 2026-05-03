const pool = require('../../../config/database');
class AvaliacaoFisicaRepository {
  async findAll() { const [rows] = await pool.execute('SELECT * FROM avaliacao_fisica ORDER BY data_avaliacao DESC'); return rows; }
  async findById(id) { const [rows] = await pool.execute('SELECT * FROM avaliacao_fisica WHERE id_avaliacao = ?', [id]); return rows[0] || null; }
  async findByAluno(alunoId) { const [rows] = await pool.execute('SELECT * FROM avaliacao_fisica WHERE aluno_id_aluno = ? ORDER BY data_avaliacao DESC', [alunoId]); return rows; }
  async create(avaliacao) { const [result] = await pool.execute('INSERT INTO avaliacao_fisica (data_avaliacao, peso, altura, observacoes, aluno_id_aluno) VALUES (?, ?, ?, ?, ?)', [avaliacao.data_avaliacao, avaliacao.peso, avaliacao.altura, avaliacao.observacoes, avaliacao.aluno_id_aluno]); return result.insertId; }
}
module.exports = new AvaliacaoFisicaRepository();