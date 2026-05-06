package com.vitalativa.controller;

import com.vitalativa.entity.TreinoExercicio;
import com.vitalativa.service.TreinoExercicioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/treino-exercicio")
@Tag(name = "Treino-Exercício", description = "Gerenciamento de exercícios em treinos")
public class TreinoExercicioController {
    
    private final TreinoExercicioService service;
    
    public TreinoExercicioController(TreinoExercicioService service) { this.service = service; }
    
    @GetMapping
    @Operation(summary = "Listar todas as relações treino-exercício")
    public List<TreinoExercicio> findAll() { return service.findAll(); }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar relação por ID")
    public ResponseEntity<TreinoExercicio> findById(@PathVariable Integer id) {
        TreinoExercicio treinoExercicio = service.findById(id);
        if (treinoExercicio == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(treinoExercicio);
    }
    
    @PostMapping
    @Operation(summary = "Criar nova relação treino-exercício")
    public TreinoExercicio create(@RequestBody TreinoExercicio treinoExercicio) { return service.save(treinoExercicio); }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar relação")
    public ResponseEntity<TreinoExercicio> update(@PathVariable Integer id, @RequestBody TreinoExercicio treinoExercicio) {
        treinoExercicio.setIdTreinoExercicio(id);
        return ResponseEntity.ok(service.save(treinoExercicio));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir relação")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}