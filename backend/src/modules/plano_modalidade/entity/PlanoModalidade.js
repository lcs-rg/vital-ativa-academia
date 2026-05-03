class PlanoModalidade {
  constructor({ plano_id_plano, modalidade_id_modalidade }) {
    this.plano_id_plano = plano_id_plano;
    this.modalidade_id_modalidade = modalidade_id_modalidade;
  }
  validate() {
    const errors = [];
    if (!this.plano_id_plano) errors.push('Plano é obrigatório');
    if (!this.modalidade_id_modalidade) errors.push('Modalidade é obrigatória');
    return errors;
  }
}
module.exports = PlanoModalidade;