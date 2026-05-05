const supabase = require('../../../config/database');

class PlanoModalidadeRepository {
  async findAll() {
    const { data, error } = await supabase.from('plano_modalidade').select('*');
    if (error) throw error;
    return data;
  }

  async findByPlano(planoId) {
    const { data, error } = await supabase.from('plano_modalidade').select('*').eq('plano_id_plano', planoId);
    if (error) throw error;
    return data;
  }

  async create(data) {
    const { error } = await supabase.from('plano_modalidade').insert([
      { plano_id_plano: data.plano_id_plano, modalidade_id_modalidade: data.modalidade_id_modalidade },
    ]);
    if (error) throw error;
    return 1;
  }
}

module.exports = new PlanoModalidadeRepository();