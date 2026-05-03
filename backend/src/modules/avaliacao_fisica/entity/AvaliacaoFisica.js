class AvaliacaoFisica {
  constructor({ id_avaliacao, data_avaliacao, peso, altura, observacoes, aluno_id_aluno }) {
    this.id_avaliacao = id_avaliacao;
    this.data_avaliacao = data_avaliacao;
    this.peso = peso;
    this.altura = altura;
    this.observacoes = observacoes;
    this.aluno_id_aluno = aluno_id_aluno;
  }
  validate() {
    const errors = [];
    if (!this.aluno_id_aluno) errors.push('Aluno é obrigatório');
    return errors;
  }
}
module.exports = AvaliacaoFisica;