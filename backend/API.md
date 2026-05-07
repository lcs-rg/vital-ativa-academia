# Vital Ativa - API Documentation

## Base URL
```
https://vital-ativa-academia.onrender.com/api
```
**Nota:** Em desenvolvimento local, use `http://localhost:10000/api`

---

## Endpoints

### 1. Alunos
Gerenciamento de alunos da academia.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/alunos` | Listar todos os alunos |
| GET | `/alunos/:id` | Buscar aluno por ID |
| POST | `/alunos` | Criar novo aluno |
| PUT | `/alunos/:id` | Atualizar aluno |
| DELETE | `/alunos/:id` | Excluir aluno |

#### Exemplo - Listar Alunos
```bash
GET /api/alunos
```

**Response:**
```json
[
  {
    "id_aluno": 1,
    "nome": "João Silva",
    "cpf": "123.456.789-00",
    "email": "joao@email.com",
    "telefone": "(11) 99999-9999",
    "data_nascimento": "1990-01-15",
    "altura": 1.75,
    "peso": 70.5,
    "objetivo": "Perda de peso"
  }
]
```

#### Exemplo - Criar Aluno
```bash
POST /api/alunos
Content-Type: application/json

{
  "nome": "João Silva",
  "cpf": "123.456.789-00",
  "email": "joao@email.com",
  "telefone": "(11) 99999-9999",
  "data_nascimento": "1990-01-15",
  "altura": 1.75,
  "peso": 70.5,
  "objetivo": "Perda de peso"
}
```

**Response (201):**
```json
{
  "id_aluno": 1,
  "nome": "João Silva",
  "cpf": "123.456.789-00",
  "email": "joao@email.com",
  "telefone": "(11) 99999-9999",
  "data_nascimento": "1990-01-15",
  "altura": 1.75,
  "peso": 70.5,
  "objetivo": "Perda de peso"
}
```

#### Exemplo - Atualizar Aluno
```bash
PUT /api/alunos/1
Content-Type: application/json

{
  "nome": "João Silva Santos",
  "telefone": "(11) 88888-8888"
}
```

#### Exemplo - Excluir Aluno
```bash
DELETE /api/alunos/1
```

**Response (204):** Sem conteúdo

---

### 2. Planos
Gerenciamento de planos de matrícula.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/planos` | Listar todos os planos |
| GET | `/planos/:id` | Buscar plano por ID |
| POST | `/planos` | Criar novo plano |
| PUT | `/planos/:id` | Atualizar plano |
| DELETE | `/planos/:id` | Excluir plano |

#### Campos
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| nome | string | Sim | Nome do plano |
| valor | number | Sim | Valor em reais |
| duracao_meses | number | Sim | Duração em meses |
| descricao | string | Não | Descrição do plano |

#### Exemplo - Criar Plano
```bash
POST /api/planos
Content-Type: application/json

{
  "nome": "Premium",
  "valor": 150.00,
  "duracao_meses": 12,
  "descricao": "Plano completo com acesso a todas as aulas"
}
```

---

### 3. Instrutores
Gerenciamento de instrutores.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/instrutores` | Listar todos os instrutores |
| GET | `/instrutores/:id` | Buscar instrutor por ID |
| POST | `/instrutores` | Criar novo instrutor |
| PUT | `/instrutores/:id` | Atualizar instrutor |
| DELETE | `/instrutores/:id` | Excluir instrutor |

#### Campos
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| nome | string | Sim | Nome do instrutor |
| telefone | string | Não | Telefone de contato |
| email | string | Sim | Email do instrutor |

---

### 4. Modalidades
Gerenciamento de modalidades (tipos de aula).

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/modalidades` | Listar todas as modalidades |
| GET | `/modalidades/:id` | Buscar modalidade por ID |
| POST | `/modalidades` | Criar nova modalidade |
| PUT | `/modalidades/:id` | Atualizar modalidade |
| DELETE | `/modalidades/:id` | Excluir modalidade |

---

### 5. Exercícios
Gerenciamento de exercícios.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/exercicios` | Listar todos os exercícios |
| GET | `/exercicios/:id` | Buscar exercício por ID |
| POST | `/exercicios` | Criar novo exercício |
| PUT | `/exercicios/:id` | Atualizar exercício |
| DELETE | `/exercicios/:id` | Excluir exercício |

---

### 6. Matrículas
Gerenciamento de matrículas de alunos.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/matriculas` | Listar todas as matrículas |
| GET | `/matriculas/:id` | Buscar matrícula por ID |
| POST | `/matriculas` | Criar nova matrícula |
| PUT | `/matriculas/:id` | Atualizar matrícula |
| DELETE | `/matriculas/:id` | Excluir matrícula |

#### Campos
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| data_inicio | date | Sim | Data de início da matrícula |
| data_fim | date | Não | Data de fim da matrícula |
| status | string | Não | Status da matrícula |
| aluno_id_aluno | number | Sim | ID do aluno |
| plano_id_plano | number | Sim | ID do plano |

---

### 7. Pagamentos
Gerenciamento de pagamentos.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/pagamentos` | Listar todos os pagamentos |
| GET | `/pagamentos/:id` | Buscar pagamento por ID |
| POST | `/pagamentos` | Criar novo pagamento |
| PUT | `/pagamentos/:id` | Atualizar pagamento |
| DELETE | `/pagamentos/:id` | Excluir pagamento |

#### Campos
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| data_pagamento | date | Sim | Data do pagamento |
| valor | number | Sim | Valor pago |
| forma_pagamento | string | Não | Forma de pagamento |
| matricula_id_matricula | number | Sim | ID da matrícula |

---

### 8. Aulas
Gerenciamento de aulas.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/aulas` | Listar todas as aulas |
| GET | `/aulas/:id` | Buscar aula por ID |
| POST | `/aulas` | Criar nova aula |
| PUT | `/aulas/:id` | Atualizar aula |
| DELETE | `/aulas/:id` | Excluir aula |

#### Campos
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| dia_semana | string | Sim | Dia da semana |
| hora_inicio | time | Sim | Hora de início |
| hora_fim | time | Não | Hora de fim |
| capacidade_maxima | number | Não | Capacidade máxima |
| modalidade_id_modalidade | number | Não | ID da modalidade |
| instrutor_id_instrutor | number | Não | ID do instrutor |

---

### 9. Treinos
Gerenciamento de treinos.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/treinos` | Listar todos os treinos |
| GET | `/treinos/:id` | Buscar treino por ID |
| POST | `/treinos` | Criar novo treino |
| PUT | `/treinos/:id` | Atualizar treino |
| DELETE | `/treinos/:id` | Excluir treino |

---

### 10. Avaliações Físicas
Gerenciamento de avaliações físicas.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/avaliacoes` | Listar todas as avaliações |
| GET | `/avaliacoes/:id` | Buscar avaliação por ID |
| POST | `/avaliacoes` | Criar nova avaliação |
| PUT | `/avaliacoes/:id` | Atualizar avaliação |
| DELETE | `/avaliacoes/:id` | Excluir avaliação |

---

### 11. Aluno-Aula (Junction Table)
Registro de alunos em aulas.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/aluno-aula` | Listar registros |
| POST | `/aluno-aula` | Registrar aluno em aula |
| DELETE | `/aluno-aula` | Remover aluno da aula |

#### Exemplo - Registrar Aluno em Aula
```bash
POST /api/aluno-aula
Content-Type: application/json

{
  "aluno_id_aluno": 1,
  "aula_id_aula": 3
}
```

#### Exemplo - Remover Aluno da Aula
```bash
DELETE /api/aluno-aula
Content-Type: application/json

{
  "aluno_id_aluno": 1,
  "aula_id_aula": 3
}
```

---

### 12. Treino-Exercício (Junction Table)
Associação de exercícios em treinos.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/treino-exercicio` | Listar registros |
| POST | `/treino-exercicio` | Adicionar exercício ao treino |
| DELETE | `/treino-exercicio` | Remover exercício do treino |

---

### 13. Plano-Modalidade (Junction Table)
Associação de modalidades aos planos.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/plano-modalidade` | Listar registros |
| POST | `/plano-modalidade` | Adicionar modalidade ao plano |
| DELETE | `/plano-modalidade` | Remover modalidade do plano |

---

## Códigos de Status

| Código | Descrição |
|--------|-----------|
| 200 | Sucesso |
| 201 | Criado com sucesso |
| 204 | Excluído com sucesso |
| 400 | Erro na requisição (dados inválidos) |
| 404 | Recurso não encontrado |
| 500 | Erro interno do servidor |

---

## Error Response
```json
{
  "error": "Mensagem de erro"
}
```