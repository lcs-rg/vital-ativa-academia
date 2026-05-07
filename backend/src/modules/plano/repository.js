const supabase = require('../../config/database');

class PlanoRepository {
  async findAll() {
    const { data, error } = await supabase.from('plano').select('*');
    if (error) throw error;
    return data || [];
  }

  async findById(id) {
    const { data, error } = await supabase.from('plano').select('*').eq('id_plano', id).single();
    if (error) throw error;
    return data;
  }

  async create(data) {
    const { data: result, error } = await supabase.from('plano').insert(data).select().single();
    if (error) throw error;
    return result;
  }

  async update(id, data) {
    const { data: result, error } = await supabase.from('plano').update(data).eq('id_plano', id).select().single();
    if (error) throw error;
    return result;
  }

  async delete(id) {
    const { error } = await supabase.from('plano').delete().eq('id_plano', id);
    if (error) throw error;
  }
}

module.exports = new PlanoRepository();