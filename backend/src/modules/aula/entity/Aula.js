class Aula {
  constructor({ id_aula, dia_semana, hora_inicio, hora_fim, capacidade_maxima, modalidade_id_modalidade, instrutor_id_Instrutor }) {
    this.id_aula = id_aula;
    this.dia_semana = dia_semana;
    this.hora_inicio = hora_inicio;
    this.hora_fim = hora_fim;
    this.capacidade_maxima = capacidade_maxima;
    this.modalidade_id_modalidade = modalidade_id_modalidade;
    this.instrutor_id_Instrutor = instrutor_id_Instrutor;
  }
  validate() {
    const errors = [];
    if (!this.dia_semana) errors.push('Dia da semana é obrigatório');
    if (!this.hora_inicio) errors.push('Hora de início é obrigatória');
    if (!this.modalidade_id_modalidade) errors.push('Modalidade é obrigatória');
    return errors;
  }
}
module.exports = Aula;