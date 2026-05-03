class Treino {
  constructor({ id_treino, descricao, data_criacao, instrutor_id_Instrutor, aluno_id_aluno }) {
    this.id_treino = id_treino;
    this.descricao = descricao;
    this.data_criacao = data_criacao;
    this.instrutor_id_Instrutor = instrutor_id_Instrutor;
    this.aluno_id_aluno = aluno_id_aluno;
  }
  validate() {
    const errors = [];
    if (!this.aluno_id_aluno) errors.push('Aluno é obrigatório');
    return errors;
  }
}
module.exports = Treino;