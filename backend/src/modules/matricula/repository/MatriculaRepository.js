const pool = require('../../../config/database');

class MatriculaRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM matricula ORDER BY data_inicio DESC');
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query('SELECT * FROM matricula WHERE id_matricula = $1', [id]);
    return result.rows[0] || null;
  }

  async findByAluno(alunoId) {
    const result = await pool.query('SELECT * FROM matricula WHERE aluno_id_aluno = $1', [alunoId]);
    return result.rows;
  }

  async create(matricula) {
    const result = await pool.query(
      'INSERT INTO matricula (data_inicio, data_fim, status, aluno_id_aluno, plano_id_plano) VALUES ($1, $2, $3, $4, $5) RETURNING id_matricula',
      [matricula.data_inicio, matricula.data_fim, matricula.status, matricula.aluno_id_aluno, matricula.plano_id_plano]
    );
    return result.rows[0].id_matricula;
  }
}

module.exports = new MatriculaRepository();