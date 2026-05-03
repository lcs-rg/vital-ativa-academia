const pool = require('../../../config/database');

class AlunoAulaRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM aluno_aula');
    return result.rows;
  }

  async findByAula(aulaId) {
    const result = await pool.query('SELECT * FROM aluno_aula WHERE aula_id_aula = $1', [aulaId]);
    return result.rows;
  }

  async findByAluno(alunoId) {
    const result = await pool.query('SELECT * FROM aluno_aula WHERE aluno_id_aluno = $1', [alunoId]);
    return result.rows;
  }

  async create(data) {
    const result = await pool.query(
      'INSERT INTO aluno_aula (data_inscricao, status, presenca, aluno_id_aluno, aula_id_aula) VALUES ($1, $2, $3, $4, $5) RETURNING (data_inscricao, status, presenca)',
      [data.data_inscricao, data.status, data.presenca, data.aluno_id_aluno, data.aula_id_aula]
    );
    return result.rowCount;
  }
}

module.exports = new AlunoAulaRepository();