class Pagamento {
  constructor({ id_pagamentos, valor, data_vencimento, data_pagamento, status, tipo_pagamento, matricula_id_matricula }) {
    this.id_pagamentos = id_pagamentos;
    this.valor = valor;
    this.data_vencimento = data_vencimento;
    this.data_pagamento = data_pagamento;
    this.status = status;
    this.tipo_pagamento = tipo_pagamento;
    this.matricula_id_matricula = matricula_id_matricula;
  }
  validate() {
    const errors = [];
    if (!this.valor) errors.push('Valor é obrigatório');
    if (!this.matricula_id_matricula) errors.push('Matrícula é obrigatória');
    return errors;
  }
}
module.exports = Pagamento;