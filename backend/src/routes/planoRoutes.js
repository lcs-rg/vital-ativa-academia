const express = require('express');
const router = express.Router();
const supabase = require('../../config/database');

const tables = {
  planos: 'plano',
  instrutores: 'instrutor',
  modalidades: 'modalidade',
  exercicios: 'exercicio',
  avaliacoes: 'avaliacao_fisica',
  matriculas: 'matricula',
  pagamentos: 'pagamento',
  aulas: 'aula',
  treinos: 'treino',
  'aluno-aula': 'aluno_aula',
  'treino-exercicio': 'treino_exercicio',
  'plano-modalidade': 'plano_modalidade'
};

const idFields = {
  planos: 'id_plano',
  instrutores: 'id_instrutor',
  modalidades: 'id_modalidade',
  exercicios: 'id_exercicio',
  avaliacoes: 'id_avaliacao',
  matriculas: 'id_matricula',
  pagamentos: 'id_pagamentos',
  aulas: 'id_aula',
  treinos: 'id_treino',
  'aluno-aula': 'id_aluno_aula',
  'treino-exercicio': 'id_treino_exercicio',
  'plano-modalidade': 'id'
};

Object.keys(tables).forEach(table => {
  const dbTable = tables[table];
  const idField = idFields[table];

  router.get(`/${table === 'avaliacoes' ? '' : table}`, async (req, res) => {
    const { data, error } = await supabase.from(dbTable).select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data || []);
  });

  router.get(`/${table === 'avaliacoes' ? ':id' : table}/:id`, async (req, res) => {
    const { data, error } = await supabase.from(dbTable).select('*').eq(idField, req.params.id).single();
    if (error) return res.status(404).json({ error: 'Não encontrado' });
    res.json(data);
  });

  router.post(`/${table === 'avaliacoes' ? '' : table}`, async (req, res) => {
    const { data, error } = await supabase.from(dbTable).insert(req.body).select();
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0]);
  });

  router.put(`/${table === 'avaliacoes' ? ':id' : table}/:id`, async (req, res) => {
    const { data, error } = await supabase.from(dbTable).update(req.body).eq(idField, req.params.id).select();
    if (error) return res.status(400).json({ error: error.message });
    res.json(data[0]);
  });

  router.delete(`/${table === 'avaliacoes' ? ':id' : table}/:id`, async (req, res) => {
    const { error } = await supabase.from(dbTable).delete().eq(idField, req.params.id);
    if (error) return res.status(400).json({ error: error.message });
    res.status(204).send();
  });
});

module.exports = router;