const express = require('express');
const router = express.Router();
const supabase = require('../config/database');

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('avaliacao_fisica').select('*').order('data_avaliacao', { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const { data, error } = await supabase.from('avaliacao_fisica').select('*').eq('id_avaliacao', req.params.id).single();
  if (error) return res.status(404).json({ error: 'Avaliação não encontrada' });
  res.json(data);
});

router.post('/', async (req, res) => {
  const { data, error } = await supabase.from('avaliacao_fisica').insert(req.body).select();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
});

router.put('/:id', async (req, res) => {
  const { data, error } = await supabase.from('avaliacao_fisica').update(req.body).eq('id_avaliacao', req.params.id).select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
});

router.delete('/:id', async (req, res) => {
  const { error } = await supabase.from('avaliacao_fisica').delete().eq('id_avaliacao', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

module.exports = router;