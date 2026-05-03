const pool = require('../../../config/database');

class PlanoRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM plano ORDER BY nome ASC');
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query('SELECT * FROM plano WHERE id_plano = $1', [id]);
    return result.rows[0] || null;
  }

  async create(plano) {
    const result = await pool.query(
      'INSERT INTO plano (nome, valor, duracao_meses, descricao) VALUES ($1, $2, $3, $4) RETURNING id_plano',
      [plano.nome, plano.valor, plano.duracao_meses, plano.descricao]
    );
    return result.rows[0].id_plano;
  }
}

module.exports = new PlanoRepository();