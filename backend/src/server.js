require('dotenv').config();
const app = require('./app');
const pool = require('./config/database');

const PORT = process.env.SERVER_PORT || 3000;

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conectado ao MySQL com sucesso!');
    connection.release();
  } catch (error) {
    console.error('❌ Erro ao conectar no MySQL:', error.message);
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