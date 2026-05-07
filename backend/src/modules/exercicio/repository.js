const supabase = require('../../config/database');
class ExercicioRepository {
  async findAll() { const { data, error } = await supabase.from('exercicio').select('*'); if (error) throw error; return data || []; }
  async findById(id) { const { data, error } = await supabase.from('exercicio').select('*').eq('id_exercicio', id).single(); if (error) throw error; return data; }
  async create(data) { const { data: result, error } = await supabase.from('exercicio').insert(data).select().single(); if (error) throw error; return result; }
  async update(id, data) { const { data: result, error } = await supabase.from('exercicio').update(data).eq('id_exercicio', id).select().single(); if (error) throw error; return result; }
  async delete(id) { const { error } = await supabase.from('exercicio').delete().eq('id_exercicio', id); if (error) throw error; }
}
module.exports = new ExercicioRepository();