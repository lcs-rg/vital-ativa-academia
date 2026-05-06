const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const supabase = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/debug', async (req, res) => {
  const { data, error } = await supabase.from('aluno').select('*');
  res.json({ count: data?.length, data, error });
});

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

module.exports = app;