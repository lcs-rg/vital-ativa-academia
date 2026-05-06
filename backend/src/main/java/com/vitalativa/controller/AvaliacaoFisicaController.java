package com.vitalativa.controller;

import com.vitalativa.entity.AvaliacaoFisica;
import com.vitalativa.service.AvaliacaoFisicaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/avaliacoes")
@Tag(name = "Avaliações Físicas", description = "Gerenciamento de avaliações físicas")
public class AvaliacaoFisicaController {
    
    private final AvaliacaoFisicaService service;
    
    public AvaliacaoFisicaController(AvaliacaoFisicaService service) {
        this.service = service;
    }
    
    @GetMapping
    @Operation(summary = "Listar todas as avaliações")
    public List<AvaliacaoFisica> findAll() { return service.findAll(); }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar avaliação por ID")
    public ResponseEntity<AvaliacaoFisica> findById(@PathVariable Integer id) {
        AvaliacaoFisica avaliacao = service.findById(id);
        if (avaliacao == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(avaliacao);
    }
    
    @PostMapping
    @Operation(summary = "Criar nova avaliação")
    public AvaliacaoFisica create(@RequestBody AvaliacaoFisica avaliacao) { return service.save(avaliacao); }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar avaliação")
    public ResponseEntity<AvaliacaoFisica> update(@PathVariable Integer id, @RequestBody AvaliacaoFisica avaliacao) {
        avaliacao.setIdAvaliacao(id);
        return ResponseEntity.ok(service.save(avaliacao));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir avaliação")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}