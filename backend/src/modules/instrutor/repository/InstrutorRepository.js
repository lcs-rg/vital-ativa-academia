const pool = require('../../../config/database');

class InstrutorRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM instrutor ORDER BY nome ASC');
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query('SELECT * FROM instrutor WHERE id_instrutor = $1', [id]);
    return result.rows[0] || null;
  }

  async create(instrutor) {
    const result = await pool.query(
      'INSERT INTO instrutor (nome, telefone, email) VALUES ($1, $2, $3) RETURNING id_instrutor',
      [instrutor.nome, instrutor.telefone, instrutor.email]
    );
    return result.rows[0].id_instrutor;
  }
}

module.exports = new InstrutorRepository();