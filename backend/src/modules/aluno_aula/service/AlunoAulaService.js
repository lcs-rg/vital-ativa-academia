const repository = require('../repository/AlunoAulaRepository');
const AlunoAula = require('../entity/AlunoAula');
class AlunoAulaService {
  async getAll() { return repository.findAll(); }
  async getByAula(aulaId) { return repository.findByAula(aulaId); }
  async getByAluno(alunoId) { return repository.findByAluno(alunoId); }
  async create(data) { const aa = new AlunoAula(data); const errors = aa.validate(); if (errors.length > 0) { const err = new Error(errors.join(', ')); err.status = 400; throw err; } return repository.create(aa); }
}
module.exports = new AlunoAulaService();