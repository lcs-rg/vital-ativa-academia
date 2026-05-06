const express = require('express');
const router = express.Router();
const supabase = require('../config/database');

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
  pagamentos: 'id_pagamento',
  aulas: 'id_aula',
  treinos: 'id_treino',
  'aluno-aula': 'aluno_id_aluno',
  'treino-exercicio': 'treino_id_treino',
  'plano-modalidade': 'plano_id_plano'
};

const junctionTables = ['aluno-aula', 'treino-exercicio', 'plano-modalidade'];

Object.keys(tables).forEach(table => {
  const dbTable = tables[table];
  const idField = idFields[table];
  const isJunction = junctionTables.includes(table);

  // GET all
  router.get(`/${table === 'avaliacoes' ? '' : table}`, async (req, res) => {
    const { data, error } = await supabase.from(dbTable).select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data || []);
  });

  // GET by id (não aplicável para junction tables)
  if (!isJunction) {
    router.get(`/${table === 'avaliacoes' ? ':id' : table}/:id`, async (req, res) => {
      const { data, error } = await supabase.from(dbTable).select('*').eq(idField, req.params.id).single();
      if (error) return res.status(404).json({ error: 'Não encontrado' });
      res.json(data);
    });
  }

  // POST
  router.post(`/${table === 'avaliacoes' ? '' : table}`, async (req, res) => {
    const { data, error } = await supabase.from(dbTable).insert(req.body).select();
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0]);
  });

  // PUT (não aplicável para junction tables sem ID único)
  if (!isJunction) {
    router.put(`/${table === 'avaliacoes' ? ':id' : table}/:id`, async (req, res) => {
      const { data, error } = await supabase.from(dbTable).update(req.body).eq(idField, req.params.id).select();
      if (error) return res.status(400).json({ error: error.message });
      res.json(data[0]);
    });
  }

  // DELETE (não aplicável para junction tables sem ID único)
  if (!isJunction) {
    router.delete(`/${table === 'avaliacoes' ? ':id' : table}/:id`, async (req, res) => {
      const { error } = await supabase.from(dbTable).delete().eq(idField, req.params.id);
      if (error) return res.status(400).json({ error: error.message });
      res.status(204).send();
    });
  }
});

module.exports = router;