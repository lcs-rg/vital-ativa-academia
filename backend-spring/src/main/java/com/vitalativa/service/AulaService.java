package com.vitalativa.service;

import com.vitalativa.entity.Aula;
import com.vitalativa.repository.AulaRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AulaService {
    
    private final AulaRepository repository;
    
    public AulaService(AulaRepository repository) {
        this.repository = repository;
    }
    
    public List<Aula> findAll() {
        return repository.findAll();
    }
    
    public Aula findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public Aula save(Aula aula) {
        return repository.save(aula);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}