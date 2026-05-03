require('dotenv').config();
const app = require('./app');
const pool = require('./config/database');

const PORT = process.env.SERVER_PORT || 10000;

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar no PostgreSQL:', error.message);
    process.exit(1);
  }
}

async function startServer() {
  await testConnection();
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
}

startServer();