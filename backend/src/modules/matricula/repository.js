const supabase = require('../../config/database');
class MatriculaRepository {
  async findAll() { const { data, error } = await supabase.from('matricula').select('*'); if (error) throw error; return data || []; }
  async findById(id) { const { data, error } = await supabase.from('matricula').select('*').eq('id_matricula', id).single(); if (error) throw error; return data; }
  async create(data) { const { data: result, error } = await supabase.from('matricula').insert(data).select().single(); if (error) throw error; return result; }
  async update(id, data) { const { data: result, error } = await supabase.from('matricula').update(data).eq('id_matricula', id).select().single(); if (error) throw error; return result; }
  async delete(id) { const { error } = await supabase.from('matricula').delete().eq('id_matricula', id); if (error) throw error; }
}
module.exports = new MatriculaRepository();