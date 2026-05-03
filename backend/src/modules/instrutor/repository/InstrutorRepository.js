const pool = require('../../../config/database');

class InstrutorRepository {
  async findAll() {
    const [rows] = await pool.execute('SELECT * FROM instrutor ORDER BY nome ASC');
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM instrutor WHERE id_instrutor = ?', [id]);
    return rows[0] || null;
  }

  async create(instrutor) {
    const [result] = await pool.execute(
      'INSERT INTO instrutor (nome, telefone, email) VALUES (?, ?, ?)',
      [instrutor.nome, instrutor.telefone, instrutor.email]
    );
    return result.insertId;
  }
}

module.exports = new InstrutorRepository();