package com.vitalativa.controller;

import com.vitalativa.entity.Exercicio;
import com.vitalativa.service.ExercicioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/exercicios")
@Tag(name = "Exercícios", description = "Gerenciamento de exercícios")
public class ExercicioController {
    
    private final ExercicioService service;
    
    public ExercicioController(ExercicioService service) {
        this.service = service;
    }
    
    @GetMapping
    @Operation(summary = "Listar todos os exercícios")
    public List<Exercicio> findAll() {
        return service.findAll();
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar exercício por ID")
    public ResponseEntity<Exercicio> findById(@Parameter(description = "ID do exercício", example = "1") @PathVariable Integer id) {
        Exercicio exercicio = service.findById(id);
        if (exercicio == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(exercicio);
    }
    
    @PostMapping
    @Operation(summary = "Criar novo exercício")
    public Exercicio create(@RequestBody Exercicio exercicio) {
        return service.save(exercicio);
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar exercício")
    public ResponseEntity<Exercicio> update(@PathVariable Integer id, @RequestBody Exercicio exercicio) {
        exercicio.setIdExercicio(id);
        return ResponseEntity.ok(service.save(exercicio));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir exercício")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}