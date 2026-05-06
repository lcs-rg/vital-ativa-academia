package com.vitalativa.controller;

import com.vitalativa.entity.PlanoModalidade;
import com.vitalativa.service.PlanoModalidadeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/plano-modalidade")
@Tag(name = "Plano-Modalidade", description = "Gerenciamento de modalidades por plano")
public class PlanoModalidadeController {
    
    private final PlanoModalidadeService service;
    
    public PlanoModalidadeController(PlanoModalidadeService service) { this.service = service; }
    
    @GetMapping
    @Operation(summary = "Listar todas as relações plano-modalidade")
    public List<PlanoModalidade> findAll() { return service.findAll(); }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar relação por ID")
    public ResponseEntity<PlanoModalidade> findById(@PathVariable Integer id) {
        PlanoModalidade planoModalidade = service.findById(id);
        if (planoModalidade == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(planoModalidade);
    }
    
    @PostMapping
    @Operation(summary = "Criar nova relação plano-modalidade")
    public PlanoModalidade create(@RequestBody PlanoModalidade planoModalidade) { return service.save(planoModalidade); }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar relação")
    public ResponseEntity<PlanoModalidade> update(@PathVariable Integer id, @RequestBody PlanoModalidade planoModalidade) {
        planoModalidade.setId(id);
        return ResponseEntity.ok(service.save(planoModalidade));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir relação")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}