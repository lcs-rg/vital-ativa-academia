package com.vitalativa.controller;

import com.vitalativa.entity.AlunoAula;
import com.vitalativa.service.AlunoAulaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/aluno-aula")
@Tag(name = "Aluno-Aula", description = "Gerenciamento de alunos em aulas")
public class AlunoAulaController {
    
    private final AlunoAulaService service;
    
    public AlunoAulaController(AlunoAulaService service) { this.service = service; }
    
    @GetMapping
    @Operation(summary = "Listar todas as relações aluno-aula")
    public List<AlunoAula> findAll() { return service.findAll(); }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar relação por ID")
    public ResponseEntity<AlunoAula> findById(@PathVariable Integer id) {
        AlunoAula alunoAula = service.findById(id);
        if (alunoAula == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(alunoAula);
    }
    
    @PostMapping
    @Operation(summary = "Criar nova relação aluno-aula")
    public AlunoAula create(@RequestBody AlunoAula alunoAula) { return service.save(alunoAula); }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar relação")
    public ResponseEntity<AlunoAula> update(@PathVariable Integer id, @RequestBody AlunoAula alunoAula) {
        alunoAula.setIdAlunoAula(id);
        return ResponseEntity.ok(service.save(alunoAula));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir relação")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}