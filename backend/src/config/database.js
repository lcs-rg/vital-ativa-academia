require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// FORÇAR uso de SERVICE_ROLE_KEY (sem fallback para ANON_KEY)
console.log('=== SUPABASE CONFIG ===');
console.log('URL:', supabaseUrl ? 'OK' : 'ERRO');
console.log('SERVICE_ROLE_KEY:', serviceKey ? `OK (${serviceKey.substring(0, 15)}...)` : 'ERRO - NAO CONFIGURADA');
console.log('========================');

if (!supabaseUrl) {
  console.error('ERRO: SUPABASE_URL não definido!');
  process.exit(1);
}

if (!serviceKey) {
  console.error('ERRO: SUPABASE_SERVICE_ROLE_KEY não definido!');
  console.error('Configure a variável no ambiente de produção!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

console.log('>>> Supabase client inicializado com SERVICE_ROLE_KEY');
module.exports = supabase;