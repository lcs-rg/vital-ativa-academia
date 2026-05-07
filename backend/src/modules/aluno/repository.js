const supabase = require('../../config/database');

class AlunoRepository {
  async findAll() {
    const { data, error } = await supabase
      .from('aluno')
      .select('*')
      .order('nome');
    
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase
      .from('aluno')
      .select('*')
      .eq('id_aluno', id)
      .single();
    
    if (error) throw error;
    return data;
  }

  async create(data) {
    const { data: result, error } = await supabase
      .from('aluno')
      .insert(data)
      .select()
      .single();
    
    if (error) throw error;
    return result;
  }

  async update(id, data) {
    const { data: result, error } = await supabase
      .from('aluno')
      .update(data)
      .eq('id_aluno', id)
      .select()
      .single();
    
    if (error) throw error;
    return result;
  }

  async delete(id) {
    const { error } = await supabase
      .from('aluno')
      .delete()
      .eq('id_aluno', id);
    
    if (error) throw error;
  }
}

module.exports = new AlunoRepository();