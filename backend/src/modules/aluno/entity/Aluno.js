class Aluno {
  constructor({ id_aluno, nome, cpf, email, telefone, data_nascimento }) {
    this.id_aluno = id_aluno;
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