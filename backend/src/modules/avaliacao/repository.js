const supabase = require('../../config/database');

class AvaliacaoRepository {
  async findAll() {
    const { data, error } = await supabase
      .from('avaliacao_fisica')
      .select('*')
      .order('data_avaliacao', { ascending: false });
    
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase
      .from('avaliacao_fisica')
      .select('*')
      .eq('id_avaliacao', id)
      .single();
    
    if (error) throw error;
    return data;
  }

  async create(data) {
    const { data: result, error } = await supabase
      .from('avaliacao_fisica')
      .insert(data)
      .select()
      .single();
    
    if (error) throw error;
    return result;
  }

  async update(id, data) {
    const { data: result, error } = await supabase
      .from('avaliacao_fisica')
      .update(data)
      .eq('id_avaliacao', id)
      .select()
      .single();
    
    if (error) throw error;
    return result;
  }

  async delete(id) {
    const { error } = await supabase
      .from('avaliacao_fisica')
      .delete()
      .eq('id_avaliacao', id);
    
    if (error) throw error;
  }
}

module.exports = new AvaliacaoRepository();