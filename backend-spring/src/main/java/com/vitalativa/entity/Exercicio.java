package com.vitalativa.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "exercicio")
public class Exercicio {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_exercicio")
    private Integer idExercicio;
    
    @NotBlank(message = "Nome é obrigatório")
    private String nome;
    
    private String descricao;
    
    public Exercicio() {}
    
    public Integer getIdExercicio() { return idExercicio; }
    public void setIdExercicio(Integer idExercicio) { this.idExercicio = idExercicio; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
}