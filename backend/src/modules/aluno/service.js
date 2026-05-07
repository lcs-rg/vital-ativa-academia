const repository = require('./repository');

class AlunoService {
  async getAll() {
    return await repository.findAll();
  }

  async getById(id) {
    const aluno = await repository.findById(id);
    if (!aluno) {
      throw new Error('Aluno não encontrado');
    }
    return aluno;
  }

  async create(data) {
    if (!data.nome || !data.email) {
      throw new Error('Nome e email são obrigatórios');
    }
    return await repository.create(data);
  }

  async update(id, data) {
    const aluno = await repository.findById(id);
    if (!aluno) {
      throw new Error('Aluno não encontrado');
    }
    return await repository.update(id, data);
  }

  async delete(id) {
    const aluno = await repository.findById(id);
    if (!aluno) {
      throw new Error('Aluno não encontrado');
    }
    await repository.delete(id);
  }
}

module.exports = new AlunoService();