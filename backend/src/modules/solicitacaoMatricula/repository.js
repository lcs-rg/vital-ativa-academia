const supabase = require('../../config/database');
class SolicitacaoMatriculaRepository {
  async findAll() { const { data, error } = await supabase.from('solicitacao_matricula').select('*').order('created_at', { ascending: false }); if (error) throw error; return data || []; }
  async findById(id) { const { data, error } = await supabase.from('solicitacao_matricula').select('*').eq('id', id).single(); if (error) throw error; return data; }
  async create(data) { const { data: result, error } = await supabase.from('solicitacao_matricula').insert(data).select().single(); if (error) throw error; return result; }
}
module.exports = new SolicitacaoMatriculaRepository();