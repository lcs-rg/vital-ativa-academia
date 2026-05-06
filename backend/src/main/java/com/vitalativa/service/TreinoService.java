package com.vitalativa.service;

import com.vitalativa.entity.Treino;
import com.vitalativa.repository.TreinoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TreinoService {
    
    private final TreinoRepository repository;
    
    public TreinoService(TreinoRepository repository) {
        this.repository = repository;
    }
    
    public List<Treino> findAll() {
        return repository.findAll();
    }
    
    public Treino findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public Treino save(Treino treino) {
        return repository.save(treino);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}