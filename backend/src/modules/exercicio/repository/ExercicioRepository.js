const supabase = require('../../../config/database');

class ExercicioRepository {
  async findAll() {
    const { data, error } = await supabase.from('exercicio').select('*').order('nome', { ascending: true });
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase.from('exercicio').select('*').eq('id_exercicio', id);
    if (error) throw error;
    return data[0] || null;
  }

  async create(exercicio) {
    const { data, error } = await supabase.from('exercicio').insert([
      { nome: exercicio.nome, descricao: exercicio.descricao },
    ]).select();
    if (error) throw error;
    return data[0].id_exercicio;
  }

  async remove(id) {
    const { error } = await supabase.from('exercicio').delete().eq('id_exercicio', id);
    if (error) throw error;
    return 1;
  }
}

module.exports = new ExercicioRepository();