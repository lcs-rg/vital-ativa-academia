const pool = require('../../../config/database');

class PlanoRepository {
  async findAll() {
    const [rows] = await pool.execute('SELECT * FROM plano ORDER BY nome ASC');
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM plano WHERE id_plano = ?', [id]);
    return rows[0] || null;
  }

  async create(plano) {
    const [result] = await pool.execute(
      'INSERT INTO plano (nome, valor, duracao_meses, descricao) VALUES (?, ?, ?, ?)',
      [plano.nome, plano.valor, plano.duracao_meses, plano.descricao]
    );
    return result.insertId;
  }
}

module.exports = new PlanoRepository();