class Exercicio {
  constructor({ id_exercicio, nome, descricao }) {
    this.id_exercicio = id_exercicio;
    this.nome = nome;
    this.descricao = descricao;
  }
  validate() {
    const errors = [];
    if (!this.nome) errors.push('Nome é obrigatório');
    return errors;
  }
}
module.exports = Exercicio;