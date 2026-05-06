package com.vitalativa.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "treino_exercicio")
public class TreinoExercicio {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_treino_exercicio")
    private Integer idTreinoExercicio;
    
    private Integer series;
    private Integer repeticoes;
    
    @NotNull(message = "Treino é obrigatório")
    @Column(name = "treino_id_treino")
    private Integer treinoIdTreino;
    
    @NotNull(message = "Exercício é obrigatório")
    @Column(name = "exercicio_id_exercicio")
    private Integer exercicioIdExercicio;
    
    public TreinoExercicio() {}
    
    public Integer getIdTreinoExercicio() { return idTreinoExercicio; }
    public void setIdTreinoExercicio(Integer idTreinoExercicio) { this.idTreinoExercicio = idTreinoExercicio; }
    public Integer getSeries() { return series; }
    public void setSeries(Integer series) { this.series = series; }
    public Integer getRepeticoes() { return repeticoes; }
    public void setRepeticoes(Integer repeticoes) { this.repeticoes = repeticoes; }
    public Integer getTreinoIdTreino() { return treinoIdTreino; }
    public void setTreinoIdTreino(Integer treinoIdTreino) { this.treinoIdTreino = treinoIdTreino; }
    public Integer getExercicioIdExercicio() { return exercicioIdExercicio; }
    public void setExercicioIdExercicio(Integer exercicioIdExercicio) { this.exercicioIdExercicio = exercicioIdExercicio; }
}