const pool = require('../../../config/database');
class ModalidadeRepository {
  async findAll() { const [rows] = await pool.execute('SELECT * FROM modalidade ORDER BY nome ASC'); return rows; }
  async findById(id) { const [rows] = await pool.execute('SELECT * FROM modalidade WHERE id_modalidade = ?', [id]); return rows[0] || null; }
  async create(modalidade) { const [result] = await pool.execute('INSERT INTO modalidade (nome, descricao, exige_agendamento) VALUES (?, ?, ?)', [modalidade.nome, modalidade.descricao, modalidade.exige_agendamento]); return result.insertId; }
}
module.exports = new ModalidadeRepository();