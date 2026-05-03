require('dotenv').config();
const pool = require('./config/database');

const TABLES = `
CREATE TABLE IF NOT EXISTS aluno (
    id_aluno SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    data_nascimento DATE,
    altura DECIMAL(3,2),
    peso DECIMAL(5,2),
    objetivo TEXT,
    observacoes TEXT
);

CREATE TABLE IF NOT EXISTS plano (
    id_plano SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    duracao_meses INTEGER NOT NULL,
    descricao TEXT
);

CREATE TABLE IF NOT EXISTS instrutor (
    id_instrutor SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS modalidade (
    id_modalidade SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    exige_agendamento BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS exercicio (
    id_exercicio SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
);

CREATE TABLE IF NOT EXISTS avaliacao_fisica (
    id_avaliacao SERIAL PRIMARY KEY,
    data_avaliacao DATE,
    peso DECIMAL(5,2),
    altura DECIMAL(3,2),
    observacoes TEXT,
    aluno_id_aluno INTEGER REFERENCES aluno(id_aluno)
);

CREATE TABLE IF NOT EXISTS matricula (
    id_matricula SERIAL PRIMARY KEY,
    data_inicio DATE,
    data_fim DATE,
    status VARCHAR(20),
    aluno_id_aluno INTEGER REFERENCES aluno(id_aluno),
    plano_id_plano INTEGER REFERENCES plano(id_plano)
);

CREATE TABLE IF NOT EXISTS pagamento (
    id_pagamentos SERIAL PRIMARY KEY,
    valor DECIMAL(10,2),
    data_vencimento DATE,
    data_pagamento DATE,
    status VARCHAR(20),
    tipo_pagamento VARCHAR(20),
    matricula_id_matricula INTEGER REFERENCES matricula(id_matricula)
);

CREATE TABLE IF NOT EXISTS aula (
    id_aula SERIAL PRIMARY KEY,
    dia_semana VARCHAR(20),
    hora_inicio TIME,
    hora_fim TIME,
    capacidade_maxima INTEGER,
    modalidade_id_modalidade INTEGER REFERENCES modalidade(id_modalidade),
    instrutor_id_instrutor INTEGER REFERENCES instrutor(id_instrutor)
);

CREATE TABLE IF NOT EXISTS treino (
    id_treino SERIAL PRIMARY KEY,
    descricao TEXT,
    data_criacao DATE,
    instrutor_id_instrutor INTEGER REFERENCES instrutor(id_instrutor),
    aluno_id_aluno INTEGER REFERENCES aluno(id_aluno)
);

CREATE TABLE IF NOT EXISTS aluno_aula (
    data_inscricao DATE,
    status VARCHAR(20),
    presenca BOOLEAN DEFAULT FALSE,
    aluno_id_aluno INTEGER REFERENCES aluno(id_aluno),
    aula_id_aula INTEGER REFERENCES aula(id_aula)
);

CREATE TABLE IF NOT EXISTS treino_exercicio (
    series INTEGER,
    repeticoes INTEGER,
    treino_id_treino INTEGER REFERENCES treino(id_treino),
    exercicio_id_exercicio INTEGER REFERENCES exercicio(id_exercicio)
);

CREATE TABLE IF NOT EXISTS plano_modalidade (
    plano_id_plano INTEGER REFERENCES plano(id_plano),
    modalidade_id_modalidade INTEGER REFERENCES modalidade(id_modalidade)
);
`;

async function createTables() {
  console.log('Criando tabelas...');
  const statements = TABLES.split(';').filter(s => s.trim());
  
  for (const sql of statements) {
    if (sql.trim()) {
      try {
        await pool.query(sql);
      } catch (err) {
        console.log('Tabela pode já existir:', err.message);
      }
    }
  }
  console.log('✅ Tabelas criadas!');
}

module.exports = { createTables };