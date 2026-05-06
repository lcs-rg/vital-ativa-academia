package com.vitalativa.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name = "matricula")
public class Matricula {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_matricula")
    private Integer idMatricula;
    
    @Column(name = "data_inicio")
    private LocalDate dataInicio;
    
    @Column(name = "data_fim")
    private LocalDate dataFim;
    
    private String status;
    
    @Column(name = "aluno_id_aluno")
    private Integer alunoIdAluno;
    
    @Column(name = "plano_id_plano")
    private Integer planoIdPlano;
    
    public Matricula() {}
    
    public Integer getIdMatricula() { return idMatricula; }
    public void setIdMatricula(Integer idMatricula) { this.idMatricula = idMatricula; }
    public LocalDate getDataInicio() { return dataInicio; }
    public void setDataInicio(LocalDate dataInicio) { this.dataInicio = dataInicio; }
    public LocalDate getDataFim() { return dataFim; }
    public void setDataFim(LocalDate dataFim) { this.dataFim = dataFim; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Integer getAlunoIdAluno() { return alunoIdAluno; }
    public void setAlunoIdAluno(Integer alunoIdAluno) { this.alunoIdAluno = alunoIdAluno; }
    public Integer getPlanoIdPlano() { return planoIdPlano; }
    public void setPlanoIdPlano(Integer planoIdPlano) { this.planoIdPlano = planoIdPlano; }
}