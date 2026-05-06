package com.vitalativa.controller;

import com.vitalativa.entity.Instrutor;
import com.vitalativa.service.InstrutorService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/instrutores")
@Tag(name = "Instrutores", description = "Gerenciamento de instrutores")
public class InstrutorController {
    
    private final InstrutorService service;
    
    public InstrutorController(InstrutorService service) {
        this.service = service;
    }
    
    @GetMapping
    @Operation(summary = "Listar todos os instrutores")
    public List<Instrutor> findAll() {
        return service.findAll();
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar instrutor por ID")
    public ResponseEntity<Instrutor> findById(@Parameter(description = "ID do instrutor", example = "1") @PathVariable Integer id) {
        Instrutor instrutor = service.findById(id);
        if (instrutor == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(instrutor);
    }
    
    @PostMapping
    @Operation(summary = "Criar novo instrutor")
    public Instrutor create(@RequestBody Instrutor instrutor) {
        return service.save(instrutor);
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar instrutor")
    public ResponseEntity<Instrutor> update(@PathVariable Integer id, @RequestBody Instrutor instrutor) {
        instrutor.setIdInstrutor(id);
        return ResponseEntity.ok(service.save(instrutor));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir instrutor")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}