package com.vitalativa.controller;

import com.vitalativa.entity.Matricula;
import com.vitalativa.service.MatriculaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/matriculas")
@Tag(name = "Matrículas", description = "Gerenciamento de matrículas")
public class MatriculaController {
    
    private final MatriculaService service;
    
    public MatriculaController(MatriculaService service) { this.service = service; }
    
    @GetMapping
    @Operation(summary = "Listar todas as matrículas")
    public List<Matricula> findAll() { return service.findAll(); }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar matrícula por ID")
    public ResponseEntity<Matricula> findById(@PathVariable Integer id) {
        Matricula matricula = service.findById(id);
        if (matricula == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(matricula);
    }
    
    @PostMapping
    @Operation(summary = "Criar nova matrícula")
    public Matricula create(@RequestBody Matricula matricula) { return service.save(matricula); }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar matrícula")
    public ResponseEntity<Matricula> update(@PathVariable Integer id, @RequestBody Matricula matricula) {
        matricula.setIdMatricula(id);
        return ResponseEntity.ok(service.save(matricula));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir matrícula")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}