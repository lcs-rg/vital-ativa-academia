class AlunoAula {
  constructor({ data_inscricao, status, presenca, aluno_id_aluno, aula_id_aula }) {
    this.data_inscricao = data_inscricao;
    this.status = status;
    this.presenca = presenca;
    this.aluno_id_aluno = aluno_id_aluno;
    this.aula_id_aula = aula_id_aula;
  }
  validate() {
    const errors = [];
    if (!this.aluno_id_aluno) errors.push('Aluno é obrigatório');
    if (!this.aula_id_aula) errors.push('Aula é obrigatória');
    return errors;
  }
}
module.exports = AlunoAula;