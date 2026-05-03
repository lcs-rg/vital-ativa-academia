const pool = require('../../../config/database');

class AulaRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM aula ORDER BY dia_semana, hora_inicio');
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query('SELECT * FROM aula WHERE id_aula = $1', [id]);
    return result.rows[0] || null;
  }

  async findByModalidade(modalidadeId) {
    const result = await pool.query('SELECT * FROM aula WHERE modalidade_id_modalidade = $1', [modalidadeId]);
    return result.rows;
  }

  async create(aula) {
    const result = await pool.query(
      'INSERT INTO aula (dia_semana, hora_inicio, hora_fim, capacidade_maxima, modalidade_id_modalidade, instrutor_id_instrutor) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_aula',
      [aula.dia_semana, aula.hora_inicio, aula.hora_fim, aula.capacidade_maxima, aula.modalidade_id_modalidade, aula.instrutor_id_instrutor]
    );
    return result.rows[0].id_aula;
  }
}

module.exports = new AulaRepository();