package com.vitalativa.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "modalidade")
public class Modalidade {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_modalidade")
    private Integer idModalidade;
    
    @NotBlank(message = "Nome é obrigatório")
    private String nome;
    
    private String descricao;
    
    @Column(name = "exige_agendamento")
    private Boolean exigeAgendamento;
    
    public Modalidade() {}
    
    public Integer getIdModalidade() { return idModalidade; }
    public void setIdModalidade(Integer idModalidade) { this.idModalidade = idModalidade; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public Boolean getExigeAgendamento() { return exigeAgendamento; }
    public void setExigeAgendamento(Boolean exigeAgendamento) { this.exigeAgendamento = exigeAgendamento; }
}