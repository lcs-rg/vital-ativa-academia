package com.vitalativa.service;

import com.vitalativa.entity.Matricula;
import com.vitalativa.repository.MatriculaRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MatriculaService {
    
    private final MatriculaRepository repository;
    
    public MatriculaService(MatriculaRepository repository) {
        this.repository = repository;
    }
    
    public List<Matricula> findAll() {
        return repository.findAll();
    }
    
    public Matricula findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public Matricula save(Matricula matricula) {
        return repository.save(matricula);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}