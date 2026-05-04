const supabase = require('../../../config/database');

class MatriculaRepository {
  async findAll() {
    const { data, error } = await supabase.from('matricula').select('*').order('data_inicio', { ascending: false });
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase.from('matricula').select('*').eq('id_matricula', id);
    if (error) throw error;
    return data[0] || null;
  }

  async findByAluno(alunoId) {
    const { data, error } = await supabase.from('matricula').select('*').eq('aluno_id_aluno', alunoId);
    if (error) throw error;
    return data;
  }

  async create(matricula) {
    const { data, error } = await supabase.from('matricula').insert([
      {
        data_inicio: matricula.data_inicio,
        data_fim: matricula.data_fim,
        status: matricula.status,
        aluno_id_aluno: matricula.aluno_id_aluno,
        plano_id_plano: matricula.plano_id_plano,
      },
    ]).select();
    if (error) throw error;
    return data[0].id_matricula;
  }
}

module.exports = new MatriculaRepository();