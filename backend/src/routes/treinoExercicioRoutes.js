const express = require('express');
const router = express.Router();
const supabase = require('../config/database');

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('treino_exercicio').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data || []);
});

router.post('/', async (req, res) => {
  const { data, error } = await supabase.from('treino_exercicio').insert(req.body).select();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
});

router.delete('/', async (req, res) => {
  const { treino_id_treino, exercicio_id_exercicio } = req.body;
  if (!treino_id_treino || !exercicio_id_exercicio) {
    return res.status(400).json({ error: 'Informe treino_id_treino e exercicio_id_exercicio' });
  }
  const { error } = await supabase.from('treino_exercicio').delete()
    .eq('treino_id_treino', treino_id_treino)
    .eq('exercicio_id_exercicio', exercicio_id_exercicio);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

module.exports = router;