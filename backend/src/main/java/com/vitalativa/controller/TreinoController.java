package com.vitalativa.controller;

import com.vitalativa.entity.Treino;
import com.vitalativa.service.TreinoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/treinos")
@Tag(name = "Treinos", description = "Gerenciamento de treinos")
public class TreinoController {
    
    private final TreinoService service;
    
    public TreinoController(TreinoService service) { this.service = service; }
    
    @GetMapping
    @Operation(summary = "Listar todos os treinos")
    public List<Treino> findAll() { return service.findAll(); }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar treino por ID")
    public ResponseEntity<Treino> findById(@PathVariable Integer id) {
        Treino treino = service.findById(id);
        if (treino == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(treino);
    }
    
    @PostMapping
    @Operation(summary = "Criar novo treino")
    public Treino create(@RequestBody Treino treino) { return service.save(treino); }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar treino")
    public ResponseEntity<Treino> update(@PathVariable Integer id, @RequestBody Treino treino) {
        treino.setIdTreino(id);
        return ResponseEntity.ok(service.save(treino));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir treino")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}