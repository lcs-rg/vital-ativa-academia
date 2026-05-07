const express = require('express');
const supabase = require('../config/database');

const config = {
  planos: { table: 'plano', idField: 'id_plano' },
  instrutores: { table: 'instrutor', idField: 'id_instrutor' },
  modalidades: { table: 'modalidade', idField: 'id_modalidade' },
  exercicios: { table: 'exercicio', idField: 'id_exercicio' },
  avaliacoes: { table: 'avaliacao_fisica', idField: 'id_avaliacao' },
  matriculas: { table: 'matricula', idField: 'id_matricula' },
  pagamentos: { table: 'pagamento', idField: 'id_pagamento' },
  aulas: { table: 'aula', idField: 'id_aula' },
  treinos: { table: 'treino', idField: 'id_treino' },
  alunos: { table: 'aluno', idField: 'id_aluno' }
};

function createRouter() {
  const router = express.Router();

  Object.keys(config).forEach(key => {
    const { table, idField } = config[key];

    router.get(`/${key}`, async (req, res) => {
      const { data, error } = await supabase.from(table).select('*');
      if (error) return res.status(500).json({ error: error.message });
      res.json(data || []);
    });

    router.get(`/${key}/:id`, async (req, res) => {
      const { data, error } = await supabase.from(table).select('*').eq(idField, req.params.id).single();
      if (error) return res.status(404).json({ error: 'Não encontrado' });
      res.json(data);
    });

    router.post(`/${key}`, async (req, res) => {
      const { data, error } = await supabase.from(table).insert(req.body).select();
      if (error) return res.status(400).json({ error: error.message });
      res.status(201).json(data[0]);
    });

    router.put(`/${key}/:id`, async (req, res) => {
      const { data, error } = await supabase.from(table).update(req.body).eq(idField, req.params.id).select();
      if (error) return res.status(400).json({ error: error.message });
      res.json(data[0]);
    });

    router.delete(`/${key}/:id`, async (req, res) => {
      const { error } = await supabase.from(table).delete().eq(idField, req.params.id);
      if (error) return res.status(400).json({ error: error.message });
      res.status(204).send();
    });
  });

  return router;
}

module.exports = createRouter;