const pool = require('../../../config/database');

class AlunoRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM aluno ORDER BY nome ASC');
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query('SELECT * FROM aluno WHERE id_aluno = $1', [id]);
    return result.rows[0] || null;
  }

  async create(aluno) {
    const result = await pool.query(
      `INSERT INTO aluno (nome, cpf, email, telefone, data_nascimento, altura, peso, objetivo, observacoes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id_aluno`,
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
    return result.rows[0].id_aluno;
  }
}

module.exports = new AlunoRepository();