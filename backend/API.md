# Vital Ativa - API Documentation

## Base URL
```
https://vital-ativa-academia.onrender.com/api
```

> **Local:** `http://localhost:10000/api`

---

## Arquitetura

```
Request → Router → Controller → Service → Repository → Supabase
```

A API segue o padrão **Controller → Service → Repository** (inspired by Spring Boot).

---

## Endpoints

### 1. Alunos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/alunos` | Listar todos os alunos |
| GET | `/alunos/:id` | Buscar aluno por ID |
| POST | `/alunos` | Criar novo aluno |
| PUT | `/alunos/:id` | Atualizar aluno |
| DELETE | `/alunos/:id` | Excluir aluno |

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| nome | string | Sim |
| cpf | string | Sim |
| email | string | Sim |
| telefone | string | Não |
| data_nascimento | date | Não |

**Exemplo - Listar:**
```bash
curl -X GET http://localhost:10000/api/alunos
```

**Response:**
```json
[
  {
    "id_aluno": 1,
    "nome": "Lucas Silva",
    "cpf": "12345678901",
    "telefone": "86999990001",
    "email": "lucas@email.com",
    "data_nascimento": "2002-05-10"
  }
]
```

**Exemplo - Criar:**
```bash
curl -X POST http://localhost:10000/api/alunos \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","cpf":"12345678900","email":"joao@email.com","telefone":"11999999999"}'
```

**Response (201):** Retorna o aluno criado com `id_aluno`.

**Exemplo - Atualizar:**
```bash
curl -X PUT http://localhost:10000/api/alunos/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva Santos"}'
```

**Exemplo - Deletar:**
```bash
curl -X DELETE http://localhost:10000/api/alunos/1
```
> **Status (204):** Sem conteúdo

---

### 2. Planos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/planos` | Listar todos os planos |
| GET | `/planos/:id` | Buscar plano por ID |
| POST | `/planos` | Criar novo plano |
| PUT | `/planos/:id` | Atualizar plano |
| DELETE | `/planos/:id` | Excluir plano |

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| nome | string | Sim |
| valor | number | Sim |
| duracao_meses | number | Sim |
| descricao | string | Não |

**Exemplo - Listar:**
```bash
curl -X GET http://localhost:10000/api/planos
```

**Response:**
```json
[
  {
    "id_plano": 1,
    "nome": "Mensal",
    "valor": 99.9,
    "duracao_meses": 1,
    "descricao": "Plano mensal"
  }
]
```

---

### 3. Instrutores

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/instrutores` | Listar todos os instrutores |
| GET | `/instrutores/:id` | Buscar instrutor por ID |
| POST | `/instrutores` | Criar novo instrutor |
| PUT | `/instrutores/:id` | Atualizar instrutor |
| DELETE | `/instrutores/:id` | Excluir instrutor |

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| nome | string | Sim |
| telefone | string | Não |
| email | string | Sim |

---

### 4. Modalidades

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/modalidades` | Listar todas as modalidades |
| GET | `/modalidades/:id` | Buscar modalidade por ID |
| POST | `/modalidades` | Criar nova modalidade |
| PUT | `/modalidades/:id` | Atualizar modalidade |
| DELETE | `/modalidades/:id` | Excluir modalidade |

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| nome | string | Sim |
| descricao | string | Não |
| exige_agendamento | boolean | Não |

---

### 5. Exercícios

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/exercicios` | Listar todos os exercícios |
| GET | `/exercicios/:id` | Buscar exercício por ID |
| POST | `/exercicios` | Criar novo exercício |
| PUT | `/exercicios/:id` | Atualizar exercício |
| DELETE | `/exercicios/:id` | Excluir exercício |

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| nome | string | Sim |
| descricao | string | Não |
| musculo_alvo | string | Não |
| equipamento | string | Não |

---

### 6. Avaliações Físicas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/avaliacoes` | Listar todas as avaliações |
| GET | `/avaliacoes/:id` | Buscar avaliação por ID |
| POST | `/avaliacoes` | Criar nova avaliação |
| PUT | `/avaliacoes/:id` | Atualizar avaliação |
| DELETE | `/avaliacoes/:id` | Excluir avaliação |

> **Ordenação:** Por `data_avaliacao` (decrescente)

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| data_avaliacao | date | Sim |
| peso | number | Não |
| altura | number | Não |
| observacoes | string | Não |
| aluno_id_aluno | number | Sim |

---

### 7. Matrículas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/matriculas` | Listar todas as matrículas |
| GET | `/matriculas/:id` | Buscar matrícula por ID |
| POST | `/matriculas` | Criar nova matrícula |
| PUT | `/matriculas/:id` | Atualizar matrícula |
| DELETE | `/matriculas/:id` | Excluir matrícula |

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| data_inicio | date | Sim |
| data_fim | date | Não |
| status | string | Não |
| aluno_id_aluno | number | Sim |
| plano_id_plano | number | Sim |

---

### 8. Pagamentos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/pagamentos` | Listar todos os pagamentos |
| GET | `/pagamentos/:id` | Buscar pagamento por ID |
| POST | `/pagamentos` | Criar novo pagamento |
| PUT | `/pagamentos/:id` | Atualizar pagamento |
| DELETE | `/pagamentos/:id` | Excluir pagamento |

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| valor | number | Sim |
| data_vencimento | date | Sim |
| data_pagamento | date | Não |
| status | string | Não |
| tipo_pagamento | string | Não |
| matricula_id_matricula | number | Sim |

---

### 9. Aulas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/aulas` | Listar todas as aulas |
| GET | `/aulas/:id` | Buscar aula por ID |
| POST | `/aulas` | Criar nova aula |
| PUT | `/aulas/:id` | Atualizar aula |
| DELETE | `/aulas/:id` | Excluir aula |

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| dia_semana | string | Sim |
| hora_inicio | time | Sim |
| hora_fim | time | Não |
| capacidade_maxima | number | Não |
| modalidade_id_modalidade | number | Não |
| instrutor_id_instrutor | number | Não |

---

### 10. Treinos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/treinos` | Listar todos os treinos |
| GET | `/treinos/:id` | Buscar treino por ID |
| POST | `/treinos` | Criar novo treino |
| PUT | `/treinos/:id` | Atualizar treino |
| DELETE | `/treinos/:id` | Excluir treino |

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| nome | string | Sim |
| descricao | string | Não |
| aluno_id_aluno | number | Sim |

---

### 11. Aluno-Aula

Relação N:N entre alunos e aulas.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/aluno-aula` | Listar registros |
| POST | `/aluno-aula` | Registrar aluno em aula |
| DELETE | `/aluno-aula` | Remover aluno da aula |

**Exemplo - Registrar:**
```bash
curl -X POST http://localhost:10000/api/aluno-aula \
  -H "Content-Type: application/json" \
  -d '{"aluno_id_aluno": 1, "aula_id_aula": 3}'
```

**Exemplo - Remover:**
```bash
curl -X DELETE http://localhost:10000/api/aluno-aula \
  -H "Content-Type: application/json" \
  -d '{"aluno_id_aluno": 1, "aula_id_aula": 3}'
```

---

### 12. Treino-Exercício

Relação N:N entre treinos e exercícios.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/treino-exercicio` | Listar registros |
| POST | `/treino-exercicio` | Adicionar exercício ao treino |
| DELETE | `/treino-exercicio` | Remover exercício do treino |

**Exemplo - Adicionar:**
```bash
curl -X POST http://localhost:10000/api/treino-exercicio \
  -H "Content-Type: application/json" \
  -d '{"treino_id_treino": 1, "exercicio_id_exercicio": 2}'
```

**Exemplo - Remover:**
```bash
curl -X DELETE http://localhost:10000/api/treino-exercicio \
  -H "Content-Type: application/json" \
  -d '{"treino_id_treino": 1, "exercicio_id_exercicio": 2}'
```

---

### 13. Plano-Modalidade

Relação N:N entre planos e modalidades.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/plano-modalidade` | Listar registros |
| POST | `/plano-modalidade` | Adicionar modalidade ao plano |
| DELETE | `/plano-modalidade` | Remover modalidade do plano |

**Exemplo - Adicionar:**
```bash
curl -X POST http://localhost:10000/api/plano-modalidade \
  -H "Content-Type: application/json" \
  -d '{"plano_id_plano": 1, "modalidade_id_modalidade": 2}'
```

**Exemplo - Remover:**
```bash
curl -X DELETE http://localhost:10000/api/plano-modalidade \
  -H "Content-Type: application/json" \
  -d '{"plano_id_plano": 1, "modalidade_id_modalidade": 2}'
```

---

### 14. Solicitações de Matrícula

Leads capturados através do formulário público do site.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/solicitacoes-matricula` | Listar todas as solicitações |
| GET | `/solicitacoes-matricula/:id` | Buscar solicitação por ID |
| POST | `/solicitacoes-matricula` | Criar nova solicitação |

**Campos:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| nome | string | Sim |
| email | string | Sim |
| telefone | string | Sim |
| cep | string | Não |
| logradouro | string | Não |
| bairro | string | Não |
| cidade | string | Não |
| estado | string | Não |
| plano_interesse | string | Sim |
| objetivo | string | Não |

> **Status padrão:** `pendente`

**Exemplo - Criar:**
```bash
curl -X POST http://localhost:10000/api/solicitacoes-matricula \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","email":"joao@email.com","telefone":"11999999999","plano_interesse":"Mensal","objetivo":"Perder peso"}'
```

**Response (201):**
```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@email.com",
  "telefone": "11999999999",
  "plano_interesse": "Mensal",
  "objetivo": "Perder peso",
  "status": "pendente",
  "created_at": "2026-05-11T10:00:00.000Z"
}
```

---

## Códigos de Status

| Código | Descrição |
|--------|-----------|
| 200 | Sucesso |
| 201 | Criado com sucesso |
| 204 | Excluído com sucesso |
| 400 | Erro na requisição |
| 404 | Recurso não encontrado |
| 500 | Erro interno do servidor |

---

## Error Response

```json
{
  "error": "Mensagem de erro"
}
```

---

## Endpoints Públicos

| Endpoint | Descrição |
|----------|-----------|
| `/` | Retorna `{ message: "Vital Ativa API", status: "running" }` |
| `/debug` | Verifica status do servidor |
| `/debug/db` | Verifica conexão com banco de dados |
| `/api-docs` | Documentação Swagger UI |