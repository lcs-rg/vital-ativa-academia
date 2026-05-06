package com.vitalativa.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "plano_modalidade")
public class PlanoModalidade {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    
    @NotNull(message = "Plano é obrigatório")
    @Column(name = "plano_id_plano")
    private Integer planoIdPlano;
    
    @NotNull(message = "Modalidade é obrigatória")
    @Column(name = "modalidade_id_modalidade")
    private Integer modalidadeIdModalidade;
    
    public PlanoModalidade() {}
    
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public Integer getPlanoIdPlano() { return planoIdPlano; }
    public void setPlanoIdPlano(Integer planoIdPlano) { this.planoIdPlano = planoIdPlano; }
    public Integer getModalidadeIdModalidade() { return modalidadeIdModalidade; }
    public void setModalidadeIdModalidade(Integer modalidadeIdModalidade) { this.modalidadeIdModalidade = modalidadeIdModalidade; }
}