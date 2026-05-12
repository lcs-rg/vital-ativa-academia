const repository = require('./repository');
class SolicitacaoMatriculaService {
  async getAll() { 
    console.log('Service: getAll');
    return await repository.findAll(); 
  }
  async getById(id) { 
    const solicitacao = await repository.findById(id); 
    if (!solicitacao) throw new Error('Solicitação não encontrada'); 
    return solicitacao; 
  }
  async create(data) { 
    console.log('Service: create - data received:', JSON.stringify(data));
    this.validate(data); 
    const sanitized = this.sanitize(data);
    console.log('Service: sanitized:', JSON.stringify(sanitized));
    const result = await repository.create(sanitized);
    console.log('Service: result from repository:', result);
    return result;
  }
  validate(data) { 
    const required = ['nome', 'email', 'telefone', 'plano_interesse']; 
    const missing = required.filter(f => !data[f] || (typeof data[f] === 'string' && !data[f].trim())); 
    if (missing.length > 0) throw new Error(`Campos obrigatórios: ${missing.join(', ')}`); 
    if (data.email && !this.isValidEmail(data.email)) throw new Error('Email inválido'); 
  }
  sanitize(data) { 
    // Filtrar apenas campos com valores não-nulos para evitar problemas com null no Supabase
    const result = {};
    
    if (data.nome?.trim()) result.nome = data.nome.trim();
    if (data.email?.trim()) result.email = data.email.trim().toLowerCase();
    if (data.telefone?.trim()) result.telefone = data.telefone.trim();
    if (data.cep?.trim()) result.cep = data.cep.trim();
    if (data.logradouro?.trim()) result.logradouro = data.logradouro.trim();
    if (data.bairro?.trim()) result.bairro = data.bairro.trim();
    if (data.cidade?.trim()) result.cidade = data.cidade.trim();
    if (data.estado?.trim()) result.estado = data.estado.trim();
    if (data.plano_interesse?.trim()) result.plano_interesse = data.plano_interesse.trim();
    if (data.objetivo?.trim()) result.objetivo = data.objetivo.trim();
    
    console.log('Service sanitize result:', JSON.stringify(result));
    return result;
  }
  isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
}
module.exports = new SolicitacaoMatriculaService();