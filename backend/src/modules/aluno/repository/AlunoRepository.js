const supabase = require('../../../config/database');

class AlunoRepository {
  async findAll() {
    const { data, error } = await supabase.from('aluno').select('*').order('nome', { ascending: true });
    if (error) throw error;
    return data;
  }

  async findById(id) {
    const { data, error } = await supabase.from('aluno').select('*').eq('id_aluno', id);
    if (error) throw error;
    return data[0] || null;
  }

  async create(aluno) {
    const { data, error } = await supabase.from('aluno').insert([
      {
        nome: aluno.nome,
        cpf: aluno.cpf,
        email: aluno.email,
        telefone: aluno.telefone,
        data_nascimento: aluno.data_nascimento,
        altura: aluno.altura,
        peso: aluno.peso,
        objetivo: aluno.objetivo,
        observacoes: aluno.observacoes,
      },
    ]).select();
    if (error) throw error;
    return data[0].id_aluno;
  }
}

module.exports = new AlunoRepository();