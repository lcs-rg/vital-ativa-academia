const pool = require('../../../config/database');

class AvaliacaoFisicaRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM avaliacao_fisica ORDER BY data_avaliacao DESC');
    return result.rows;
  }

  async findById(id) {
    const result = await pool.query('SELECT * FROM avaliacao_fisica WHERE id_avaliacao = $1', [id]);
    return result.rows[0] || null;
  }

  async findByAluno(alunoId) {
    const result = await pool.query('SELECT * FROM avaliacao_fisica WHERE aluno_id_aluno = $1 ORDER BY data_avaliacao DESC', [alunoId]);
    return result.rows;
  }

  async create(avaliacao) {
    const result = await pool.query(
      'INSERT INTO avaliacao_fisica (data_avaliacao, peso, altura, observacoes, aluno_id_aluno) VALUES ($1, $2, $3, $4, $5) RETURNING id_avaliacao',
      [avaliacao.data_avaliacao, avaliacao.peso, avaliacao.altura, avaliacao.observacoes, avaliacao.aluno_id_aluno]
    );
    return result.rows[0].id_avaliacao;
  }
}

module.exports = new AvaliacaoFisicaRepository();