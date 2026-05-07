const supabase = require('../../config/database');

class ModalidadeRepository {
  async findAll() {
    const { data, error } = await supabase.from('modalidade').select('*');
    if (error) throw error;
    return data || [];
  }
  async findById(id) {
    const { data, error } = await supabase.from('modalidade').select('*').eq('id_modalidade', id).single();
    if (error) throw error;
    return data;
  }
  async create(data) {
    const { data: result, error } = await supabase.from('modalidade').insert(data).select().single();
    if (error) throw error;
    return result;
  }
  async update(id, data) {
    const { data: result, error } = await supabase.from('modalidade').update(data).eq('id_modalidade', id).select().single();
    if (error) throw error;
    return result;
  }
  async delete(id) {
    const { error } = await supabase.from('modalidade').delete().eq('id_modalidade', id);
    if (error) throw error;
  }
}
module.exports = new ModalidadeRepository();