package com.vitalativa.controller;

import com.vitalativa.entity.Modalidade;
import com.vitalativa.service.ModalidadeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/modalidades")
@Tag(name = "Modalidades", description = "Gerenciamento de modalidades")
public class ModalidadeController {
    
    private final ModalidadeService service;
    
    public ModalidadeController(ModalidadeService service) {
        this.service = service;
    }
    
    @GetMapping
    @Operation(summary = "Listar todas as modalidades")
    public List<Modalidade> findAll() {
        return service.findAll();
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar modalidade por ID")
    public ResponseEntity<Modalidade> findById(@Parameter(description = "ID da modalidade", example = "1") @PathVariable Integer id) {
        Modalidade modalidade = service.findById(id);
        if (modalidade == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(modalidade);
    }
    
    @PostMapping
    @Operation(summary = "Criar nova modalidade")
    public Modalidade create(@RequestBody Modalidade modalidade) {
        return service.save(modalidade);
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar modalidade")
    public ResponseEntity<Modalidade> update(@PathVariable Integer id, @RequestBody Modalidade modalidade) {
        modalidade.setIdModalidade(id);
        return ResponseEntity.ok(service.save(modalidade));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir modalidade")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}