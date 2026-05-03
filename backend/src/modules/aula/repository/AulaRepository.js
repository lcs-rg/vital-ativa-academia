const pool = require('../../../config/database');
class AulaRepository {
  async findAll() { const [rows] = await pool.execute('SELECT * FROM aula ORDER BY dia_semana, hora_inicio'); return rows; }
  async findById(id) { const [rows] = await pool.execute('SELECT * FROM aula WHERE id_aula = ?', [id]); return rows[0] || null; }
  async findByModalidade(modalidadeId) { const [rows] = await pool.execute('SELECT * FROM aula WHERE modalidade_id_modalidade = ?', [modalidadeId]); return rows; }
  async create(aula) { const [result] = await pool.execute('INSERT INTO aula (dia_semana, hora_inicio, hora_fim, capacidade_maxima, modalidade_id_modalidade, instrutor_id_Instrutor) VALUES (?, ?, ?, ?, ?, ?)', [aula.dia_semana, aula.hora_inicio, aula.hora_fim, aula.capacidade_maxima, aula.modalidade_id_modalidade, aula.instrutor_id_Instrutor]); return result.insertId; }
}
module.exports = new AulaRepository();