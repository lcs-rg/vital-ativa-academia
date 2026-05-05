const supabase = require('../../../config/database');

class PagamentoRepository {
  async findAll() {
    const { data, error } = await supabase.from('pagamento').select('*').order('data_vencimento', { ascending: false });
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase.from('pagamento').select('*').eq('id_pagamentos', id);
    if (error) throw error;
    return data[0] || null;
  }

  async findByMatricula(matriculaId) {
    const { data, error } = await supabase.from('pagamento').select('*').eq('matricula_id_matricula', matriculaId);
    if (error) throw error;
    return data;
  }

  async create(pagamento) {
    const { data, error } = await supabase.from('pagamento').insert([
      { valor: pagamento.valor, data_vencimento: pagamento.data_vencimento, data_pagamento: pagamento.data_pagamento, status: pagamento.status, tipo_pagamento: pagamento.tipo_pagamento, matricula_id_matricula: pagamento.matricula_id_matricula },
    ]).select();
    if (error) throw error;
    return data[0].id_pagamentos;
  }
}

module.exports = new PagamentoRepository();