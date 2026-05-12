require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.SUPABASE_ANON_KEY;

// Diagnóstico detalhado
console.log('=== SUPABASE DIAGNOSTIC ===');
console.log('SUPABASE_URL:', supabaseUrl ? 'OK' : 'MISSING');
console.log('SUPABASE_SERVICE_ROLE_KEY:', serviceKey ? `OK (${serviceKey.substring(0, 15)}...)` : 'MISSING');
console.log('SUPABASE_ANON_KEY:', anonKey ? `OK (${anonKey.substring(0, 15)}...)` : 'MISSING');

// Decidir qual chave usar
let supabaseKey;
if (serviceKey) {
  supabaseKey = serviceKey;
  console.log('>>> USANDO: SERVICE_ROLE_KEY (bypassa RLS)');
} else if (anonKey) {
  supabaseKey = anonKey;
  console.log('>>> USANDO: ANON_KEY (sujeito a RLS)');
} else {
  supabaseKey = 'sb_publishable_92hcD-h8_pHpByu7v-3yCg_6d4lsnNE';
  console.log('>>> USANDO: FALLBACK HARDCODED');
}
console.log('===========================');

if (!supabaseUrl) {
  console.error('ERRO FATAL: SUPABASE_URL não definido!');
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

module.exports = supabase;