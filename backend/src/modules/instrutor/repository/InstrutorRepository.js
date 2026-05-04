const supabase = require('../../../config/database');

class InstrutorRepository {
  async findAll() {
    const { data, error } = await supabase.from('instrutor').select('*').order('nome', { ascending: true });
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase.from('instrutor').select('*').eq('id_instrutor', id);
    if (error) throw error;
    return data[0] || null;
  }

  async create(instrutor) {
    const { data, error } = await supabase.from('instrutor').insert([
      { nome: instrutor.nome, telefone: instrutor.telefone, email: instrutor.email },
    ]).select();
    if (error) throw error;
    return data[0].id_instrutor;
  }
}

module.exports = new InstrutorRepository();