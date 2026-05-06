package com.vitalativa.controller;

import com.vitalativa.entity.Pagamento;
import com.vitalativa.service.PagamentoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/pagamentos")
@Tag(name = "Pagamentos", description = "Gerenciamento de pagamentos")
public class PagamentoController {
    
    private final PagamentoService service;
    
    public PagamentoController(PagamentoService service) { this.service = service; }
    
    @GetMapping
    @Operation(summary = "Listar todos os pagamentos")
    public List<Pagamento> findAll() { return service.findAll(); }
    
    @GetMapping("/{id}")
    @Operation(summary = "Buscar pagamento por ID")
    public ResponseEntity<Pagamento> findById(@PathVariable Integer id) {
        Pagamento pagamento = service.findById(id);
        if (pagamento == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(pagamento);
    }
    
    @PostMapping
    @Operation(summary = "Criar novo pagamento")
    public Pagamento create(@RequestBody Pagamento pagamento) { return service.save(pagamento); }
    
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar pagamento")
    public ResponseEntity<Pagamento> update(@PathVariable Integer id, @RequestBody Pagamento pagamento) {
        pagamento.setIdPagamentos(id);
        return ResponseEntity.ok(service.save(pagamento));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Excluir pagamento")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}