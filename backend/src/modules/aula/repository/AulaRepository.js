const supabase = require('../../../config/database');

class AulaRepository {
  async findAll() {
    const { data, error } = await supabase.from('aula').select('*').order('dia_semana, hora_inicio');
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase.from('aula').select('*').eq('id_aula', id);
    if (error) throw error;
    return data[0] || null;
  }

  async findByModalidade(modalidadeId) {
    const { data, error } = await supabase.from('aula').select('*').eq('modalidade_id_modalidade', modalidadeId);
    if (error) throw error;
    return data;
  }

  async create(aula) {
    const { data, error } = await supabase.from('aula').insert([
      {
        dia_semana: aula.dia_semana,
        hora_inicio: aula.hora_inicio,
        hora_fim: aula.hora_fim,
        capacidade_maxima: aula.capacidade_maxima,
        modalidade_id_modalidade: aula.modalidade_id_modalidade,
        instrutor_id_instrutor: aula.instrutor_id_instrutor,
      },
    ]).select();
    if (error) throw error;
    return data[0].id_aula;
  }
}

module.exports = new AulaRepository();