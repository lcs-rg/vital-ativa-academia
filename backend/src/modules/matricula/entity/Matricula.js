class Matricula {
  constructor({ id_matricula, data_inicio, data_fim, status, aluno_id_aluno, plano_id_plano }) {
    this.id_matricula = id_matricula;
    this.data_inicio = data_inicio;
    this.data_fim = data_fim;
    this.status = status;
    this.aluno_id_aluno = aluno_id_aluno;
    this.plano_id_plano = plano_id_plano;
  }
  validate() {
    const errors = [];
    if (!this.aluno_id_aluno) errors.push('Aluno é obrigatório');
    if (!this.plano_id_plano) errors.push('Plano é obrigatório');
    return errors;
  }
}
module.exports = Matricula;