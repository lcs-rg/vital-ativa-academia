class TreinoExercicio {
  constructor({ series, repeticoes, treino_id_treino, exercicio_id_exercicio }) {
    this.series = series;
    this.repeticoes = repeticoes;
    this.treino_id_treino = treino_id_treino;
    this.exercicio_id_exercicio = exercicio_id_exercicio;
  }
  validate() {
    const errors = [];
    if (!this.treino_id_treino) errors.push('Treino é obrigatório');
    if (!this.exercicio_id_exercicio) errors.push('Exercício é obrigatório');
    return errors;
  }
}
module.exports = TreinoExercicio;