package com.vitalativa.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.time.LocalDate;

@Entity
@Table(name = "pagamento")
public class Pagamento {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pagamentos")
    private Integer idPagamentos;
    
    @Positive(message = "Valor deve ser positivo")
    private Double valor;
    
    @Column(name = "data_vencimento")
    private LocalDate dataVencimento;
    
    @Column(name = "data_pagamento")
    private LocalDate dataPagamento;
    
    private String status;
    
    @Column(name = "tipo_pagamento")
    private String tipoPagamento;
    
    @Column(name = "matricula_id_matricula")
    private Integer matriculaIdMatricula;
    
    public Pagamento() {}
    
    public Integer getIdPagamentos() { return idPagamentos; }
    public void setIdPagamentos(Integer idPagamentos) { this.idPagamentos = idPagamentos; }
    public Double getValor() { return valor; }
    public void setValor(Double valor) { this.valor = valor; }
    public LocalDate getDataVencimento() { return dataVencimento; }
    public void setDataVencimento(LocalDate dataVencimento) { this.dataVencimento = dataVencimento; }
    public LocalDate getDataPagamento() { return dataPagamento; }
    public void setDataPagamento(LocalDate dataPagamento) { this.dataPagamento = dataPagamento; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getTipoPagamento() { return tipoPagamento; }
    public void setTipoPagamento(String tipoPagamento) { this.tipoPagamento = tipoPagamento; }
    public Integer getMatriculaIdMatricula() { return matriculaIdMatricula; }
    public void setMatriculaIdMatricula(Integer matriculaIdMatricula) { this.matriculaIdMatricula = matriculaIdMatricula; }
}