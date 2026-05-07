const service = require('./service');

class PlanoModalidadeController {
  async getAll(req, res, next) {
    try {
      const data = await service.getAll();
      res.json(data || []);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const data = await service.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res, next) {
    try {
      await service.delete(req.body);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new PlanoModalidadeController();