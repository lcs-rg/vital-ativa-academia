package com.vitalativa.service;

import com.vitalativa.entity.TreinoExercicio;
import com.vitalativa.repository.TreinoExercicioRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TreinoExercicioService {
    
    private final TreinoExercicioRepository repository;
    
    public TreinoExercicioService(TreinoExercicioRepository repository) {
        this.repository = repository;
    }
    
    public List<TreinoExercicio> findAll() {
        return repository.findAll();
    }
    
    public TreinoExercicio findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public TreinoExercicio save(TreinoExercicio treinoExercicio) {
        return repository.save(treinoExercicio);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}