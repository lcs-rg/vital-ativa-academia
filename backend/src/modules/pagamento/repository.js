const supabase = require('../../config/database');
class PagamentoRepository {
  async findAll() { const { data, error } = await supabase.from('pagamento').select('*'); if (error) throw error; return data || []; }
  async findById(id) { const { data, error } = await supabase.from('pagamento').select('*').eq('id_pagamento', id).single(); if (error) throw error; return data; }
  async create(data) { const { data: result, error } = await supabase.from('pagamento').insert(data).select().single(); if (error) throw error; return result; }
  async update(id, data) { const { data: result, error } = await supabase.from('pagamento').update(data).eq('id_pagamento', id).select().single(); if (error) throw error; return result; }
  async delete(id) { const { error } = await supabase.from('pagamento').delete().eq('id_pagamento', id); if (error) throw error; }
}
module.exports = new PagamentoRepository();