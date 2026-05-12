const supabase = require('../../config/database');
class SolicitacaoMatriculaRepository {
  async findAll() { 
    console.log('Repository: findAll - tabela solicitacao_matricula');
    const { data, error } = await supabase.from('solicitacao_matricula').select('*').order('created_at', { ascending: false }); 
    if (error) {
      console.error('Repository findAll error:', error);
      throw error;
    }
    return data || []; 
  }
  async findById(id) { 
    const { data, error } = await supabase.from('solicitacao_matricula').select('*').eq('id', id).single(); 
    if (error) {
      console.error('Repository findById error:', error);
      throw error;
    }
    if (!data) throw new Error('Solicitação não encontrada'); 
    return data; 
  }
  async create(data) { 
    console.log('Repository create - data:', JSON.stringify(data));
    
    // Log detalhado de cada campo
    console.log('=== Verificando tamanhos dos campos ===');
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'string') {
        console.log(`${key}: "${value}" (${value.length} chars)`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });
    
    const { data: result, error } = await supabase.from('solicitacao_matricula').insert(data).select(); 
    console.log('Repository create result:', result, 'error:', error);
    if (error) {
      console.error('Repository create error:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      throw new Error(error.message || 'Erro ao inserir no banco');
    }
    if (!result || result.length === 0) {
      throw new Error('Falha ao criar solicitação - dados não retornados');
    }
    return result[0]; 
  }
}
module.exports = new SolicitacaoMatriculaRepository();