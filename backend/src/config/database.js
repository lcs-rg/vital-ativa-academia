require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

// Log de diagnóstico (sem expor chave completa)
console.log('=== SUPABASE CONFIG ===');
console.log('URL configurada:', supabaseUrl ? 'SIM' : 'NÃO');
console.log(' SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SIM' : 'NÃO');
console.log(' ANON_KEY (fallback):', process.env.SUPABASE_ANON_KEY ? 'SIM' : 'NÃO');
console.log('Key sendo usada:', supabaseKey ? (supabaseKey.substring(0, 10) + '...') : 'NENHUMA');
console.log('========================');

if (!supabaseUrl || !supabaseKey) {
  console.error('ERRO: SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY não configurados!');
  console.error('Verifique o arquivo .env');
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

module.exports = supabase;