const supabase = require('../../../config/database');

class PlanoRepository {
  async findAll() {
    const { data, error } = await supabase.from('plano').select('*').order('nome', { ascending: true });
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase.from('plano').select('*').eq('id_plano', id);
    if (error) throw error;
    return data[0] || null;
  }

  async create(plano) {
    const { data, error } = await supabase.from('plano').insert([
      {
        nome: plano.nome,
        valor: plano.valor,
        duracao_meses: plano.duracao_meses,
        descricao: plano.descricao,
      },
    ]).select();
    if (error) throw error;
    return data[0].id_plano;
  }
}

module.exports = new PlanoRepository();