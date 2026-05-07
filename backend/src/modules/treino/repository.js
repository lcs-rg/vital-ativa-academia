const supabase = require('../../config/database');
class TreinoRepository {
  async findAll() { const { data, error } = await supabase.from('treino').select('*'); if (error) throw error; return data || []; }
  async findById(id) { const { data, error } = await supabase.from('treino').select('*').eq('id_treino', id).single(); if (error) throw error; return data; }
  async create(data) { const { data: result, error } = await supabase.from('treino').insert(data).select().single(); if (error) throw error; return result; }
  async update(id, data) { const { data: result, error } = await supabase.from('treino').update(data).eq('id_treino', id).select().single(); if (error) throw error; return result; }
  async delete(id) { const { error } = await supabase.from('treino').delete().eq('id_treino', id); if (error) throw error; }
}
module.exports = new TreinoRepository();