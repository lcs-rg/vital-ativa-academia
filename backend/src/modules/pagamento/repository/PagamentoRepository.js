const pool = require('../../../config/database');

class PagamentoRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM pagamento ORDER BY data_vencimento DESC');
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query('SELECT * FROM pagamento WHERE id_pagamentos = $1', [id]);
    return result.rows[0] || null;
  }

  async findByMatricula(matriculaId) {
    const result = await pool.query('SELECT * FROM pagamento WHERE matricula_id_matricula = $1', [matriculaId]);
    return result.rows;
  }

  async create(pagamento) {
    const result = await pool.query(
      'INSERT INTO pagamento (valor, data_vencimento, data_pagamento, status, tipo_pagamento, matricula_id_matricula) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_pagamentos',
      [pagamento.valor, pagamento.data_vencimento, pagamento.data_pagamento, pagamento.status, pagamento.tipo_pagamento, pagamento.matricula_id_matricula]
    );
    return result.rows[0].id_pagamentos;
  }
}

module.exports = new PagamentoRepository();