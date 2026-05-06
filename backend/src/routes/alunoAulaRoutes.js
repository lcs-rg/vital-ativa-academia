const express = require('express');
const router = express.Router();
const supabase = require('../config/database');

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('aluno_aula').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data || []);
});

router.post('/', async (req, res) => {
  const { data, error } = await supabase.from('aluno_aula').insert(req.body).select();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
});

router.delete('/', async (req, res) => {
  const { aluno_id_aluno, aula_id_aula } = req.body;
  if (!aluno_id_aluno || !aula_id_aula) {
    return res.status(400).json({ error: 'Informe aluno_id_aluno e aula_id_aula' });
  }
  const { error } = await supabase.from('aluno_aula').delete()
    .eq('aluno_id_aluno', aluno_id_aluno)
    .eq('aula_id_aula', aula_id_aula);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

module.exports = router;