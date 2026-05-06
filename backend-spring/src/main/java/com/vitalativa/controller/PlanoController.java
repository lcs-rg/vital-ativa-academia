package com.vitalativa.controller;

import com.vitalativa.entity.Plano;
import com.vitalativa.service.PlanoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/planos")
@Tag(name = "Planos", description = "Gerenciamento de planos")
public class PlanoController {
    
    private final PlanoService service;
    
    public PlanoController(PlanoService service) {
        this.service = service;
    }
    
    @GetMapping
    @Operation(summary = "Listar todos os planos")
    public List<Plano> findAll() {
        return service.findAll();
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar plano por ID")
    public ResponseEntity<Plano> findById(@Parameter(description = "ID do plano", example = "1") @PathVariable Integer id) {
        Plano plano = service.findById(id);
        if (plano == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(plano);
    }
    
    @PostMapping
    @Operation(summary = "Criar novo plano")
    public Plano create(@RequestBody Plano plano) {
        return service.save(plano);
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar plano")
    public ResponseEntity<Plano> update(@PathVariable Integer id, @RequestBody Plano plano) {
        plano.setIdPlano(id);
        return ResponseEntity.ok(service.save(plano));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir plano")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}