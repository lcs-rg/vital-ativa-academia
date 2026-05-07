const supabase = require('../../config/database');
class AulaRepository {
  async findAll() { const { data, error } = await supabase.from('aula').select('*'); if (error) throw error; return data || []; }
  async findById(id) { const { data, error } = await supabase.from('aula').select('*').eq('id_aula', id).single(); if (error) throw error; return data; }
  async create(data) { const { data: result, error } = await supabase.from('aula').insert(data).select().single(); if (error) throw error; return result; }
  async update(id, data) { const { data: result, error } = await supabase.from('aula').update(data).eq('id_aula', id).select().single(); if (error) throw error; return result; }
  async delete(id) { const { error } = await supabase.from('aula').delete().eq('id_aula', id); if (error) throw error; }
}
module.exports = new AulaRepository();