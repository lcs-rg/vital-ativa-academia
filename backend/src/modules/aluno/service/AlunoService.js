const Aluno = require('../entity/Aluno');
const repository = require('../repository/AlunoRepository');

class AlunoService {
  async getAll() {
    return repository.findAll();
  }

  async getById(id) {
    const aluno = await repository.findById(id);
    if (!aluno) {
      const error = new Error('Aluno não encontrado');
      error.status = 404;
      throw error;
    }
    return aluno;
  }

  async create(data) {
    const aluno = new Aluno(data);
    const errors = aluno.validate();
    if (errors.length > 0) {
      const error = new Error(errors.join(', '));
      error.status = 400;
      throw error;
    }
    return repository.create(aluno);
  }
}

module.exports = new AlunoService();