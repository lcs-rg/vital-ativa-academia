package com.vitalativa.service;

import com.vitalativa.entity.Exercicio;
import com.vitalativa.repository.ExercicioRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExercicioService {
    
    private final ExercicioRepository repository;
    
    public ExercicioService(ExercicioRepository repository) {
        this.repository = repository;
    }
    
    public List<Exercicio> findAll() {
        return repository.findAll();
    }
    
    public Exercicio findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public Exercicio save(Exercicio exercicio) {
        return repository.save(exercicio);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}