const pool = require('../../../config/database');

class ExercicioRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM exercicio ORDER BY nome ASC');
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query('SELECT * FROM exercicio WHERE id_exercicio = $1', [id]);
    return result.rows[0] || null;
  }

  async create(exercicio) {
    const result = await pool.query(
      'INSERT INTO exercicio (nome, descricao) VALUES ($1, $2) RETURNING id_exercicio',
      [exercicio.nome, exercicio.descricao]
    );
    return result.rows[0].id_exercicio;
  }

  async remove(id) {
    const result = await pool.query('DELETE FROM exercicio WHERE id_exercicio = $1', [id]);
    return result.rowCount;
  }
}

module.exports = new ExercicioRepository();