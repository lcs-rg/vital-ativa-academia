const supabase = require('../../config/database');

class TreinoExercicioRepository {
  async findAll() {
    const { data, error } = await supabase.from('treino_exercicio').select('*');
    if (error) throw error;
    return data;
  }

  async create(data) {
    const { data: result, error } = await supabase.from('treino_exercicio').insert(data).select().single();
    if (error) throw error;
    return result;
  }

  async delete(treinoId, exercicioId) {
    const { error } = await supabase.from('treino_exercicio').delete()
      .eq('treino_id_treino', treinoId)
      .eq('exercicio_id_exercicio', exercicioId);
    if (error) throw error;
  }
}

module.exports = new TreinoExercicioRepository();