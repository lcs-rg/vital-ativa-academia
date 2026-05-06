package com.vitalativa.service;

import com.vitalativa.entity.Instrutor;
import com.vitalativa.repository.InstrutorRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InstrutorService {
    
    private final InstrutorRepository repository;
    
    public InstrutorService(InstrutorRepository repository) {
        this.repository = repository;
    }
    
    public List<Instrutor> findAll() {
        return repository.findAll();
    }
    
    public Instrutor findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public Instrutor save(Instrutor instrutor) {
        return repository.save(instrutor);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}