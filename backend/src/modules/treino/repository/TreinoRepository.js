const pool = require('../../../config/database');

class TreinoRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM treino ORDER BY data_criacao DESC');
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query('SELECT * FROM treino WHERE id_treino = $1', [id]);
    return result.rows[0] || null;
  }

  async findByAluno(alunoId) {
    const result = await pool.query('SELECT * FROM treino WHERE aluno_id_aluno = $1', [alunoId]);
    return result.rows;
  }

  async create(treino) {
    const result = await pool.query(
      'INSERT INTO treino (descricao, data_criacao, instrutor_id_instrutor, aluno_id_aluno) VALUES ($1, $2, $3, $4) RETURNING id_treino',
      [treino.descricao, treino.data_criacao, treino.instrutor_id_instrutor, treino.aluno_id_aluno]
    );
    return result.rows[0].id_treino;
  }
}

module.exports = new TreinoRepository();