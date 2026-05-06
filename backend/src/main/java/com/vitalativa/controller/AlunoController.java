package com.vitalativa.controller;

import com.vitalativa.entity.Aluno;
import com.vitalativa.service.AlunoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/alunos")
@Tag(name = "Alunos", description = "Gerenciamento de alunos")
public class AlunoController {
    
    private final AlunoService service;
    
    public AlunoController(AlunoService service) {
        this.service = service;
    }
    
    @GetMapping
    @Operation(summary = "Listar todos os alunos", description = "Retorna lista de alunos ordenada por nome")
    public List<Aluno> findAll() {
        return service.findAll();
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar aluno por ID", description = "Retorna um aluno específico")
    public ResponseEntity<Aluno> findById(
            @Parameter(description = "ID do aluno", example = "1") @PathVariable Integer id) {
        Aluno aluno = service.findById(id);
        if (aluno == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(aluno);
    }
    
    @PostMapping
    @Operation(summary = "Criar novo aluno", description = "Cria um novo aluno")
    public Aluno create(@RequestBody Aluno aluno) {
        return service.save(aluno);
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar aluno", description = "Atualiza um aluno existente")
    public ResponseEntity<Aluno> update(
            @Parameter(description = "ID do aluno", example = "1") @PathVariable Integer id,
            @RequestBody Aluno aluno) {
        aluno.setIdAluno(id);
        return ResponseEntity.ok(service.save(aluno));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir aluno", description = "Remove um aluno pelo ID")
    public ResponseEntity<Void> delete(
            @Parameter(description = "ID do aluno", example = "1") @PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}