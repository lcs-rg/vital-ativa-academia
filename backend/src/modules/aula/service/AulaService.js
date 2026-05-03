const repository = require('../repository/AulaRepository');
const Aula = require('../entity/Aula');
class AulaService {
  async getAll() { return repository.findAll(); }
  async getById(id) { const a = await repository.findById(id); if (!a) { const err = new Error('Aula não encontrada'); err.status = 404; throw err; } return a; }
  async getByModalidade(modalidadeId) { return repository.findByModalidade(modalidadeId); }
  async create(data) { const a = new Aula(data); const errors = a.validate(); if (errors.length > 0) { const err = new Error(errors.join(', ')); err.status = 400; throw err; } return repository.create(a); }
}
module.exports = new AulaService();