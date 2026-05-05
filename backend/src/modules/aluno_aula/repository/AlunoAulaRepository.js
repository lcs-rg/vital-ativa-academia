const supabase = require('../../../config/database');

class AlunoAulaRepository {
  async findAll() {
    const { data, error } = await supabase.from('aluno_aula').select('*');
    if (error) throw error;
    return data;
  }

  async findByAula(aulaId) {
    const { data, error } = await supabase.from('aluno_aula').select('*').eq('aula_id_aula', aulaId);
    if (error) throw error;
    return data;
  }

  async findByAluno(alunoId) {
    const { data, error } = await supabase.from('aluno_aula').select('*').eq('aluno_id_aluno', alunoId);
    if (error) throw error;
    return data;
  }

  async create(data) {
    const { error } = await supabase.from('aluno_aula').insert([
      { data_inscricao: data.data_inscricao, status: data.status, presenca: data.presenca, aluno_id_aluno: data.aluno_id_aluno, aula_id_aula: data.aula_id_aula },
    ]);
    if (error) throw error;
    return 1;
  }
}

module.exports = new AlunoAulaRepository();