const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const supabase = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml');

const app = express();

const swaggerFile = fs.readFileSync('./swagger.yaml', 'utf8');
const swaggerDocument = YAML.parse(swaggerFile);

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.json({ message: 'Vital Ativa API', status: 'running' });
});

app.get('/debug', async (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando' });
});

app.get('/debug/db', async (req, res) => {
  const { data, error } = await supabase.from('aluno').select('*');
  res.json({ count: data?.length, data, error });
});

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

module.exports = app;