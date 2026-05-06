package com.vitalativa.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalTime;

@Entity
@Table(name = "aula")
public class Aula {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_aula")
    private Integer idAula;
    
    @NotBlank(message = "Dia da semana é obrigatório")
    @Column(name = "dia_semana")
    private String diaSemana;
    
    @NotBlank(message = "Hora de início é obrigatória")
    @Column(name = "hora_inicio")
    private LocalTime horaInicio;
    
    @Column(name = "hora_fim")
    private LocalTime horaFim;
    
    @Column(name = "capacidade_maxima")
    private Integer capacidadeMaxima;
    
    @Column(name = "modalidade_id_modalidade")
    private Integer modalidadeIdModalidade;
    
    @Column(name = "instrutor_id_instrutor")
    private Integer instrutorIdInstrutor;
    
    public Aula() {}
    
    public Integer getIdAula() { return idAula; }
    public void setIdAula(Integer idAula) { this.idAula = idAula; }
    public String getDiaSemana() { return diaSemana; }
    public void setDiaSemana(String diaSemana) { this.diaSemana = diaSemana; }
    public LocalTime getHoraInicio() { return horaInicio; }
    public void setHoraInicio(LocalTime horaInicio) { this.horaInicio = horaInicio; }
    public LocalTime getHoraFim() { return horaFim; }
    public void setHoraFim(LocalTime horaFim) { this.horaFim = horaFim; }
    public Integer getCapacidadeMaxima() { return capacidadeMaxima; }
    public void setCapacidadeMaxima(Integer capacidadeMaxima) { this.capacidadeMaxima = capacidadeMaxima; }
    public Integer getModalidadeIdModalidade() { return modalidadeIdModalidade; }
    public void setModalidadeIdModalidade(Integer modalidadeIdModalidade) { this.modalidadeIdModalidade = modalidadeIdModalidade; }
    public Integer getInstrutorIdInstrutor() { return instrutorIdInstrutor; }
    public void setInstrutorIdInstrutor(Integer instrutorIdInstrutor) { this.instrutorIdInstrutor = instrutorIdInstrutor; }
}