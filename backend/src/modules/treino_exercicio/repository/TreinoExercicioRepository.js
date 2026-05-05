const supabase = require('../../../config/database');

class TreinoExercicioRepository {
  async findAll() {
    const { data, error } = await supabase.from('treino_exercicio').select('*');
    if (error) throw error;
    return data;
  }

  async findByTreino(treinoId) {
    const { data, error } = await supabase.from('treino_exercicio').select('*').eq('treino_id_treino', treinoId);
    if (error) throw error;
    return data;
  }

  async create(data) {
    const { error } = await supabase.from('treino_exercicio').insert([
      { series: data.series, repeticoes: data.repeticoes, treino_id_treino: data.treino_id_treino, exercicio_id_exercicio: data.exercicio_id_exercicio },
    ]);
    if (error) throw error;
    return 1;
  }
}

module.exports = new TreinoExercicioRepository();