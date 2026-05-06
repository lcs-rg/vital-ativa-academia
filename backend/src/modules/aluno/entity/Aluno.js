class Aluno {
  constructor({ id, nome, cpf, email, telefone, data_nascimento, altura, peso, objetivo, observacoes }) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.data_nascimento = data_nascimento;
  }

  validate() {
    const errors = [];
    if (!this.nome) errors.push('Nome é obrigatório');
    if (!this.cpf) errors.push('CPF é obrigatório');
    if (!this.email) errors.push('Email é obrigatório');
    return errors;
  }
}

module.exports = Aluno;