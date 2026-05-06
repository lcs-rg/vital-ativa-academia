package com.vitalativa.controller;

import com.vitalativa.entity.Aula;
import com.vitalativa.service.AulaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/aulas")
@Tag(name = "Aulas", description = "Gerenciamento de aulas")
public class AulaController {
    
    private final AulaService service;
    
    public AulaController(AulaService service) { this.service = service; }
    
    @GetMapping
    @Operation(summary = "Listar todas as aulas")
    public List<Aula> findAll() { return service.findAll(); }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar aula por ID")
    public ResponseEntity<Aula> findById(@PathVariable Integer id) {
        Aula aula = service.findById(id);
        if (aula == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(aula);
    }
    
    @PostMapping
    @Operation(summary = "Criar nova aula")
    public Aula create(@RequestBody Aula aula) { return service.save(aula); }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar aula")
    public ResponseEntity<Aula> update(@PathVariable Integer id, @RequestBody Aula aula) {
        aula.setIdAula(id);
        return ResponseEntity.ok(service.save(aula));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir aula")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}