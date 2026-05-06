package com.vitalativa.service;

import com.vitalativa.entity.PlanoModalidade;
import com.vitalativa.repository.PlanoModalidadeRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PlanoModalidadeService {
    
    private final PlanoModalidadeRepository repository;
    
    public PlanoModalidadeService(PlanoModalidadeRepository repository) {
        this.repository = repository;
    }
    
    public List<PlanoModalidade> findAll() {
        return repository.findAll();
    }
    
    public PlanoModalidade findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public PlanoModalidade save(PlanoModalidade planoModalidade) {
        return repository.save(planoModalidade);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}