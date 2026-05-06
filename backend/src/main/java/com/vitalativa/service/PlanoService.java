package com.vitalativa.service;

import com.vitalativa.entity.Plano;
import com.vitalativa.repository.PlanoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PlanoService {
    
    private final PlanoRepository repository;
    
    public PlanoService(PlanoRepository repository) {
        this.repository = repository;
    }
    
    public List<Plano> findAll() {
        return repository.findAll();
    }
    
    public Plano findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public Plano save(Plano plano) {
        return repository.save(plano);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}