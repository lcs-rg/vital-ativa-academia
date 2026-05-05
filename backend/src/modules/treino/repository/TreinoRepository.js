const supabase = require('../../../config/database');

class TreinoRepository {
  async findAll() {
    const { data, error } = await supabase.from('treino').select('*').order('data_criacao', { ascending: false });
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase.from('treino').select('*').eq('id_treino', id);
    if (error) throw error;
    return data[0] || null;
  }

  async findByAluno(alunoId) {
    const { data, error } = await supabase.from('treino').select('*').eq('aluno_id_aluno', alunoId);
    if (error) throw error;
    return data;
  }

  async create(treino) {
    const { data, error } = await supabase.from('treino').insert([
      { descricao: treino.descricao, data_criacao: treino.data_criacao, instrutor_id_instrutor: treino.instrutor_id_instrutor, aluno_id_aluno: treino.aluno_id_aluno },
    ]).select();
    if (error) throw error;
    return data[0].id_treino;
  }
}

module.exports = new TreinoRepository();