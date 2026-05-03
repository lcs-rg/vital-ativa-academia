class Instrutor {
  constructor({ id_instrutor, nome, telefone, email }) {
    this.id_instrutor = id_instrutor;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }

  validate() {
    const errors = [];
    if (!this.nome) errors.push('Nome é obrigatório');
    if (!this.email) errors.push('Email é obrigatório');
    return errors;
  }
}

module.exports = Instrutor;