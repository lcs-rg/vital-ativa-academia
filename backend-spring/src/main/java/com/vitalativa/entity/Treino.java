package com.vitalativa.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name = "treino")
public class Treino {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_treino")
    private Integer idTreino;
    
    private String descricao;
    
    @Column(name = "data_criacao")
    private LocalDate dataCriacao;
    
    @Column(name = "instrutor_id_instrutor")
    private Integer instrutorIdInstrutor;
    
    @NotNull(message = "Aluno é obrigatório")
    @Column(name = "aluno_id_aluno")
    private Integer alunoIdAluno;
    
    public Treino() {}
    
    public Integer getIdTreino() { return idTreino; }
    public void setIdTreino(Integer idTreino) { this.idTreino = idTreino; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public LocalDate getDataCriacao() { return dataCriacao; }
    public void setDataCriacao(LocalDate dataCriacao) { this.dataCriacao = dataCriacao; }
    public Integer getInstrutorIdInstrutor() { return instrutorIdInstrutor; }
    public void setInstrutorIdInstrutor(Integer instrutorIdInstrutor) { this.instrutorIdInstrutor = instrutorIdInstrutor; }
    public Integer getAlunoIdAluno() { return alunoIdAluno; }
    public void setAlunoIdAluno(Integer alunoIdAluno) { this.alunoIdAluno = alunoIdAluno; }
}