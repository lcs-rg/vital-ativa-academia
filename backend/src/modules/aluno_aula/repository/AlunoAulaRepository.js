const pool = require('../../../config/database');
class AlunoAulaRepository {
  async findAll() { const [rows] = await pool.execute('SELECT * FROM aluno_aula'); return rows; }
  async findByAula(aulaId) { const [rows] = await pool.execute('SELECT * FROM aluno_aula WHERE aula_id_aula = ?', [aulaId]); return rows; }
  async findByAluno(alunoId) { const [rows] = await pool.execute('SELECT * FROM aluno_aula WHERE aluno_id_aluno = ?', [alunoId]); return rows; }
  async create(data) { const [result] = await pool.execute('INSERT INTO aluno_aula (data_inscricao, status, presenca, aluno_id_aluno, aula_id_aula) VALUES (?, ?, ?, ?, ?)', [data.data_inscricao, data.status, data.presenca, data.aluno_id_aluno, data.aula_id_aula]); return result.insertId; }
}
module.exports = new AlunoAulaRepository();