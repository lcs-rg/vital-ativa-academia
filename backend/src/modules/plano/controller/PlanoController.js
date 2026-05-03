const service = require('../service/PlanoService');

class PlanoController {
  async getAll(req, res) {
    try {
      const planos = await service.getAll();
      res.status(200).json(planos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const plano = await service.getById(req.params.id);
      res.status(200).json(plano);
    } catch (error) {
      const status = error.status || 500;
      res.status(status).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const id = await service.create(req.body);
      res.status(201).json({ id, message: 'Plano criado com sucesso' });
    } catch (error) {
      const status = error.status || 500;
      res.status(status).json({ error: error.message });
    }
  }
}

module.exports = new PlanoController();