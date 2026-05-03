const pool = require('../../../config/database');

class AlunoRepository {
  async findAll() {
    const [rows] = await pool.execute('SELECT * FROM aluno ORDER BY nome ASC');
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM aluno WHERE id = ?', [id]);
    return rows[0] || null;
  }

  async create(aluno) {
    const [result] = await pool.execute(
      `INSERT INTO aluno (nome, cpf, email, telefone, data_nascimento, altura, peso, objetivo, observacoes)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        aluno.nome,
        aluno.cpf,
        aluno.email,
        aluno.telefone,
        aluno.data_nascimento,
        aluno.altura,
        aluno.peso,
        aluno.objetivo,
        aluno.observacoes,
      ]
    );
    return result.insertId;
  }
}

module.exports = new AlunoRepository();