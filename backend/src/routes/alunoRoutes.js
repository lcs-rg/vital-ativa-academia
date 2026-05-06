const express = require('express');
const router = express.Router();
const supabase = require('../config/database');

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('aluno').select('*').order('nome');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const { data, error } = await supabase.from('aluno').select('*').eq('id_aluno', req.params.id).single();
  if (error) return res.status(404).json({ error: 'Aluno não encontrado' });
  res.json(data);
});

router.post('/', async (req, res) => {
  const { data, error } = await supabase.from('aluno').insert(req.body).select();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
});

router.put('/:id', async (req, res) => {
  const { data, error } = await supabase.from('aluno').update(req.body).eq('id_aluno', req.params.id).select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
});

router.delete('/:id', async (req, res) => {
  const { error } = await supabase.from('aluno').delete().eq('id_aluno', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

module.exports = router;