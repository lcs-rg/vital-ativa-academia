class Plano {
  constructor({ id_plano, nome, valor, duracao_meses, descricao }) {
    this.id_plano = id_plano;
    this.nome = nome;
    this.valor = valor;
    this.duracao_meses = duracao_meses;
    this.descricao = descricao;
  }

  validate() {
    const errors = [];
    if (!this.nome) errors.push('Nome é obrigatório');
    if (!this.valor) errors.push('Valor é obrigatório');
    if (!this.duracao_meses) errors.push('Duração em meses é obrigatória');
    return errors;
  }
}

module.exports = Plano;