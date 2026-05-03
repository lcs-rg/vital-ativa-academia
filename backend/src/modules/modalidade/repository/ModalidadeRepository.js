const pool = require('../../../config/database');

class ModalidadeRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM modalidade ORDER BY nome ASC');
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query('SELECT * FROM modalidade WHERE id_modalidade = $1', [id]);
    return result.rows[0] || null;
  }

  async create(modalidade) {
    const result = await pool.query(
      'INSERT INTO modalidade (nome, descricao, exige_agendamento) VALUES ($1, $2, $3) RETURNING id_modalidade',
      [modalidade.nome, modalidade.descricao, modalidade.exige_agendamento]
    );
    return result.rows[0].id_modalidade;
  }
}

module.exports = new ModalidadeRepository();