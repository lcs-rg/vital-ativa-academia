package com.vitalativa.service;

import com.vitalativa.entity.Modalidade;
import com.vitalativa.repository.ModalidadeRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ModalidadeService {
    
    private final ModalidadeRepository repository;
    
    public ModalidadeService(ModalidadeRepository repository) {
        this.repository = repository;
    }
    
    public List<Modalidade> findAll() {
        return repository.findAll();
    }
    
    public Modalidade findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public Modalidade save(Modalidade modalidade) {
        return repository.save(modalidade);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}