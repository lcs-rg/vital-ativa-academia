const repository = require('./repository');
class SolicitacaoMatriculaService {
  async getAll() { return await repository.findAll(); }
  async getById(id) { const solicitacao = await repository.findById(id); if (!solicitacao) throw new Error('Solicitação não encontrada'); return solicitacao; }
  async create(data) { this.validate(data); const sanitized = this.sanitize(data); return await repository.create(sanitized); }
  validate(data) { const required = ['nome', 'email', 'telefone', 'plano_interesse']; const missing = required.filter(f => !data[f] || (typeof data[f] === 'string' && !data[f].trim())); if (missing.length > 0) throw new Error(`Campos obrigatórios: ${missing.join(', ')}`); if (data.email && !this.isValidEmail(data.email)) throw new Error('Email inválido'); }
  sanitize(data) { return { nome: data.nome?.trim() || null, email: data.email?.trim().toLowerCase() || null, telefone: data.telefone?.trim() || null, cep: data.cep?.trim() || null, logradouro: data.logradouro?.trim() || null, bairro: data.bairro?.trim() || null, cidade: data.cidade?.trim() || null, estado: data.estado?.trim() || null, plano_interesse: data.plano_interesse?.trim() || null, objetivo: data.objetivo?.trim() || null, status: 'pendente' }; }
  isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
}
module.exports = new SolicitacaoMatriculaService();