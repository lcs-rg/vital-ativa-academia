const express = require('express');
const router = express.Router();
const supabase = require('../config/database');

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('plano_modalidade').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data || []);
});

router.post('/', async (req, res) => {
  const { data, error } = await supabase.from('plano_modalidade').insert(req.body).select();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
});

router.delete('/', async (req, res) => {
  const { plano_id_plano, modalidade_id_modalidade } = req.body;
  if (!plano_id_plano || !modalidade_id_modalidade) {
    return res.status(400).json({ error: 'Informe plano_id_plano e modalidade_id_modalidade' });
  }
  const { error } = await supabase.from('plano_modalidade').delete()
    .eq('plano_id_plano', plano_id_plano)
    .eq('modalidade_id_modalidade', modalidade_id_modalidade);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

module.exports = router;