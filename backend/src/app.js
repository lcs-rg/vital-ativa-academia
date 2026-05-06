const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const supabase = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/debug', async (req, res) => {
  const { data, error, count } = await supabase.from('aluno').select('*');
  res.json({ count: data?.length, data, error });
});

app.get('/debug-table', async (req, res) => {
  const { data, error } = await supabase.from('aluno').select('*').limit(1);
  if (data?.length > 0) {
    res.json({ columns: Object.keys(data[0]), data });
  } else {
    res.json({ error: 'Tabela vazia ou sem acesso', error });
  }
});

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

module.exports = app;