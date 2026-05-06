const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || 'https://znedpwfwxbefeextriwl.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_92hcD-h8_pHpByu7v-3yCg_6d4lsnNE';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;