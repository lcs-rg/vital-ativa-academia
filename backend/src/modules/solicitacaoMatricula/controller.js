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
    console.log('=== CONTROLLER: INÍCIO ===');
    console.log('req.body type:', typeof req.body);
    console.log('req.body:', req.body);
    console.log('req.body keys:', Object.keys(req.body || {}));
    
    // Log detalhado de cada propriedade
    if (req.body && typeof req.body === 'object') {
      console.log('--- Detalhamento do req.body ---');
      Object.entries(req.body).forEach(([key, value]) => {
        const type = typeof value;
        if (type === 'string') {
          console.log(`  ${key}: string (${value.length} chars) = "${value}"`);
        } else if (type === 'number') {
          console.log(`  ${key}: number = ${value}`);
        } else if (value === null) {
          console.log(`  ${key}: null`);
        } else if (value === undefined) {
          console.log(`  ${key}: undefined`);
        } else {
          console.log(`  ${key}: ${type} = ${JSON.stringify(value)}`);
        }
      });
    }
    
    try { 
      console.log('Chamando service.create...');
      const result = await service.create(req.body);
      console.log('=== CONTROLLER: SUCESSO ===');
      if (!result) {
        return res.status(500).json({ error: 'Falha ao criar solicitação' });
      }
      res.status(201).json(result); 
    } catch (error) { 
      console.error('=== CONTROLLER: ERRO ===', error);
      if (error.message && (error.message.includes('Campos obrigatórios') || error.message.includes('inválido'))) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: error.message || 'Erro ao criar solicitação' });
    } 
  }
}
module.exports = new SolicitacaoMatriculaController();