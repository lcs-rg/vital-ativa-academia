const service = require('./service');

class AlunoController {
  async getAll(req, res, next) {
    try {
      const data = await service.getAll();
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const data = await service.getById(req.params.id);
      res.json(data);
    } catch (error) {
      if (error.message === 'Aluno não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const data = await service.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      if (error.message.includes('obrigatórios')) {
        return res.status(400).json({ error: error.message });
      }
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const data = await service.update(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      if (error.message === 'Aluno não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await service.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      if (error.message === 'Aluno não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      next(error);
    }
  }
}

module.exports = new AlunoController();