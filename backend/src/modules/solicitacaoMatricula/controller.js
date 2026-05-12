const service = require('./service');
class SolicitacaoMatriculaController {
  async getAll(req, res, next) { 
    try { 
      const data = await service.getAll();
      res.json(data); 
    } catch (error) { 
      console.error('Erro getAll:', error);
      res.status(500).json({ error: error.message || 'Erro ao buscar solicitações' });
    } 
  }
  async getById(req, res, next) { 
    try { 
      const data = await service.getById(req.params.id);
      res.json(data); 
    } catch (error) { 
      if (error.message === 'Solicitação não encontrada') {
        return res.status(404).json({ error: error.message });
      }
      console.error('Erro getById:', error);
      res.status(500).json({ error: error.message || 'Erro ao buscar solicitação' });
    } 
  }
  async create(req, res, next) { 
    try { 
      const result = await service.create(req.body);
      if (!result) {
        return res.status(500).json({ error: 'Falha ao criar solicitação' });
      }
      res.status(201).json(result); 
    } catch (error) { 
      console.error('Erro create:', error);
      if (error.message && (error.message.includes('Campos obrigatórios') || error.message.includes('inválido'))) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: error.message || 'Erro ao criar solicitação' });
    } 
  }
}
module.exports = new SolicitacaoMatriculaController();