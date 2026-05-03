class Modalidade {
  constructor({ id_modalidade, nome, descricao, exige_agendamento }) {
    this.id_modalidade = id_modalidade;
    this.nome = nome;
    this.descricao = descricao;
    this.exige_agendamento = exige_agendamento;
  }
  validate() {
    const errors = [];
    if (!this.nome) errors.push('Nome é obrigatório');
    return errors;
  }
}
module.exports = Modalidade;