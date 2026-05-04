const supabaseUrl = 'https://znedpwfwxbefeextriwl.supabase.co';
const supabaseKey = 'sb_publishable_92hcD-h8_pHpByu7v-3yCg_6d4lsnNE';

let supabaseClient = null;

async function loadSupabaseLib() {
    if (!window.supabase) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
}

async function getSupabaseClient() {
    if (supabaseClient) return supabaseClient;
    
    await loadSupabaseLib();
    supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
    return supabaseClient;
}

async function getTableData(table) {
    const client = await getSupabaseClient();
    const { data, error } = await client.from(table).select('*');
    if (error) throw error;
    return data;
}

async function getTableDataById(table, id, idColumn) {
    const client = await getSupabaseClient();
    const { data, error } = await client.from(table).select('*').eq(idColumn, id);
    if (error) throw error;
    return data[0] || null;
}

async function insertTableData(table, row) {
    const client = await getSupabaseClient();
    const { data, error } = await client.from(table).insert(row).select();
    if (error) throw error;
    return data;
}

async function updateTableData(table, id, idColumn, row) {
    const client = await getSupabaseClient();
    const { data, error } = await client.from(table).update(row).eq(idColumn, id).select();
    if (error) throw error;
    return data;
}

async function deleteTableData(table, id, idColumn) {
    const client = await getSupabaseClient();
    const { error } = await client.from(table).delete().eq(idColumn, id);
    if (error) throw error;
}

window.supabaseClient = { getSupabaseClient, getTableData, getTableDataById, insertTableData, updateTableData, deleteTableData };