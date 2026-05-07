const supabase = require('../../config/database');

class AlunoAulaRepository {
  async findAll() {
    const { data, error } = await supabase.from('aluno_aula').select('*');
    if (error) throw error;
    return data;
  }

  async create(data) {
    const { data: result, error } = await supabase.from('aluno_aula').insert(data).select().single();
    if (error) throw error;
    return result;
  }

  async delete(alunoId, aulaId) {
    const { error } = await supabase.from('aluno_aula').delete()
      .eq('aluno_id_aluno', alunoId)
      .eq('aula_id_aula', aulaId);
    if (error) throw error;
  }
}

module.exports = new AlunoAulaRepository();