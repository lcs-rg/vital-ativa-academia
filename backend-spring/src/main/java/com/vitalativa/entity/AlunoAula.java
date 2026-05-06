package com.vitalativa.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name = "aluno_aula")
public class AlunoAula {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_aluno_aula")
    private Integer idAlunoAula;
    
    @Column(name = "data_inscricao")
    private LocalDate dataInscricao;
    
    private String status;
    private Boolean presenca;
    
    @NotNull(message = "Aluno é obrigatório")
    @Column(name = "aluno_id_aluno")
    private Integer alunoIdAluno;
    
    @NotNull(message = "Aula é obrigatória")
    @Column(name = "aula_id_aula")
    private Integer aulaIdAula;
    
    public AlunoAula() {}
    
    public Integer getIdAlunoAula() { return idAlunoAula; }
    public void setIdAlunoAula(Integer idAlunoAula) { this.idAlunoAula = idAlunoAula; }
    public LocalDate getDataInscricao() { return dataInscricao; }
    public void setDataInscricao(LocalDate dataInscricao) { this.dataInscricao = dataInscricao; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Boolean getPresenca() { return presenca; }
    public void setPresenca(Boolean presenca) { this.presenca = presenca; }
    public Integer getAlunoIdAluno() { return alunoIdAluno; }
    public void setAlunoIdAluno(Integer alunoIdAluno) { this.alunoIdAluno = alunoIdAluno; }
    public Integer getAulaIdAula() { return aulaIdAula; }
    public void setAulaIdAula(Integer aulaIdAula) { this.aulaIdAula = aulaIdAula; }
}