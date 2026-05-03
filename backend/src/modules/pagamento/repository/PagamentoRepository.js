const pool = require('../../../config/database');
class PagamentoRepository {
  async findAll() { const [rows] = await pool.execute('SELECT * FROM pagamento ORDER BY data_vencimento DESC'); return rows; }
  async findById(id) { const [rows] = await pool.execute('SELECT * FROM pagamento WHERE id_pagamentos = ?', [id]); return rows[0] || null; }
  async findByMatricula(matriculaId) { const [rows] = await pool.execute('SELECT * FROM pagamento WHERE matricula_id_matricula = ?', [matriculaId]); return rows; }
  async create(pagamento) { const [result] = await pool.execute('INSERT INTO pagamento (valor, data_vencimento, data_pagamento, status, tipo_pagamento, matricula_id_matricula) VALUES (?, ?, ?, ?, ?, ?)', [pagamento.valor, pagamento.data_vencimento, pagamento.data_pagamento, pagamento.status, pagamento.tipo_pagamento, pagamento.matricula_id_matricula]); return result.insertId; }
}
module.exports = new PagamentoRepository();