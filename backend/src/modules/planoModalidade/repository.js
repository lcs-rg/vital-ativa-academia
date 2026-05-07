const supabase = require('../../config/database');

class PlanoModalidadeRepository {
  async findAll() {
    const { data, error } = await supabase.from('plano_modalidade').select('*');
    if (error) throw error;
    return data;
  }

  async create(data) {
    const { data: result, error } = await supabase.from('plano_modalidade').insert(data).select().single();
    if (error) throw error;
    return result;
  }

  async delete(planoId, modalidadeId) {
    const { error } = await supabase.from('plano_modalidade').delete()
      .eq('plano_id_plano', planoId)
      .eq('modalidade_id_modalidade', modalidadeId);
    if (error) throw error;
  }
}

module.exports = new PlanoModalidadeRepository();