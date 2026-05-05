const supabase = require('../../../config/database');

class AvaliacaoFisicaRepository {
  async findAll() {
    const { data, error } = await supabase.from('avaliacao_fisica').select('*').order('data_avaliacao', { ascending: false });
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase.from('avaliacao_fisica').select('*').eq('id_avaliacao', id);
    if (error) throw error;
    return data[0] || null;
  }

  async findByAluno(alunoId) {
    const { data, error } = await supabase.from('avaliacao_fisica').select('*').eq('aluno_id_aluno', alunoId).order('data_avaliacao', { ascending: false });
    if (error) throw error;
    return data;
  }

  async create(avaliacao) {
    const { data, error } = await supabase.from('avaliacao_fisica').insert([
      { data_avaliacao: avaliacao.data_avaliacao, peso: avaliacao.peso, altura: avaliacao.altura, observacoes: avaliacao.observacoes, aluno_id_aluno: avaliacao.aluno_id_aluno },
    ]).select();
    if (error) throw error;
    return data[0].id_avaliacao;
  }
}

module.exports = new AvaliacaoFisicaRepository();