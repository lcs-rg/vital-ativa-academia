package com.vitalativa.service;

import com.vitalativa.entity.Pagamento;
import com.vitalativa.repository.PagamentoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PagamentoService {
    
    private final PagamentoRepository repository;
    
    public PagamentoService(PagamentoRepository repository) {
        this.repository = repository;
    }
    
    public List<Pagamento> findAll() {
        return repository.findAll();
    }
    
    public Pagamento findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public Pagamento save(Pagamento pagamento) {
        return repository.save(pagamento);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}