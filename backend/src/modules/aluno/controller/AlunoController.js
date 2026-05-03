const service = require('../service/AlunoService');

class AlunoController {
  async getAll(req, res) {
    try {
      const alunos = await service.getAll();
      res.status(200).json(alunos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const aluno = await service.getById(req.params.id);
      res.status(200).json(aluno);
    } catch (error) {
      const status = error.status || 500;
      res.status(status).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const id = await service.create(req.body);
      res.status(201).json({ id, message: 'Aluno criado com sucesso' });
    } catch (error) {
      const status = error.status || 500;
      res.status(status).json({ error: error.message });
    }
  }
}

module.exports = new AlunoController();