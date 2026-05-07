const supabase = require('../../config/database');

class InstrutorRepository {
  async findAll() {
    const { data, error } = await supabase.from('instrutor').select('*');
    if (error) throw error;
    return data || [];
  }

  async findById(id) {
    const { data, error } = await supabase.from('instrutor').select('*').eq('id_instrutor', id).single();
    if (error) throw error;
    return data;
  }

  async create(data) {
    const { data: result, error } = await supabase.from('instrutor').insert(data).select().single();
    if (error) throw error;
    return result;
  }

  async update(id, data) {
    const { data: result, error } = await supabase.from('instrutor').update(data).eq('id_instrutor', id).select().single();
    if (error) throw error;
    return result;
  }

  async delete(id) {
    const { error } = await supabase.from('instrutor').delete().eq('id_instrutor', id);
    if (error) throw error;
  }
}

module.exports = new InstrutorRepository();