const supabase = require('../../../config/database');

class ModalidadeRepository {
  async findAll() {
    const { data, error } = await supabase.from('modalidade').select('*').order('nome', { ascending: true });
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase.from('modalidade').select('*').eq('id_modalidade', id);
    if (error) throw error;
    return data[0] || null;
  }

  async create(modalidade) {
    const { data, error } = await supabase.from('modalidade').insert([
      { nome: modalidade.nome, descricao: modalidade.descricao, exige_agendamento: modalidade.exige_agendamento },
    ]).select();
    if (error) throw error;
    return data[0].id_modalidade;
  }
}

module.exports = new ModalidadeRepository();