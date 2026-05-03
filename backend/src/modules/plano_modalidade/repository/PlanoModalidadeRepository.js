const pool = require('../../../config/database');

class PlanoModalidadeRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM plano_modalidade');
    return result.rows;
  }

  async findByPlano(planoId) {
    const result = await pool.query('SELECT * FROM plano_modalidade WHERE plano_id_plano = $1', [planoId]);
    return result.rows;
  }

  async create(data) {
    const result = await pool.query(
      'INSERT INTO plano_modalidade (plano_id_plano, modalidade_id_modalidade) VALUES ($1, $2) RETURNING (plano_id_plano, modalidade_id_modalidade)',
      [data.plano_id_plano, data.modalidade_id_modalidade]
    );
    return result.rowCount;
  }
}

module.exports = new PlanoModalidadeRepository();