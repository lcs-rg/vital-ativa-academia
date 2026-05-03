const pool = require('../../../config/database');
class PlanoModalidadeRepository {
  async findAll() { const [rows] = await pool.execute('SELECT * FROM plano_modalidade'); return rows; }
  async findByPlano(planoId) { const [rows] = await pool.execute('SELECT * FROM plano_modalidade WHERE plano_id_plano = ?', [planoId]); return rows; }
  async create(data) { const [result] = await pool.execute('INSERT INTO plano_modalidade (plano_id_plano, modalidade_id_modalidade) VALUES (?, ?)', [data.plano_id_plano, data.modalidade_id_modalidade]); return result.insertId; }
}
module.exports = new PlanoModalidadeRepository();