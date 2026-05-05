require('dotenv').config();
const app = require('./app');
const supabase = require('./config/database');

const PORT = process.env.SERVER_PORT || 10000;

async function testConnection() {
  const { data, error } = await supabase.from('aluno').select('id_aluno').limit(1);
  if (error) throw error;
  console.log('✅ Conectado ao Supabase!');
}

async function startServer() {
  await testConnection();
  app.listen(PORT, () => {
    console.log(`🚀 Servidor na porta ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('❌ Erro ao iniciar:', err.message);
  process.exit(1);
});