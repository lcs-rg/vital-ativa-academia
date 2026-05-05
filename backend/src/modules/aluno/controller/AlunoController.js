const service = require('../service/AlunoService');

class AlunoController {
  async getAll(req, res) {
    try {
      const alunos = await service.getAll();
      console.log('Alunos found:', alunos?.length);
      res.status(200).json(alunos);
    } catch (error) {
      console.error('Error getAll:', error.message);
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const aluno = await service.getById(req.params.id);
      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
      }
      res.status(200).json(aluno);
    } catch (error) {
      console.error('Error getById:', error.message);
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