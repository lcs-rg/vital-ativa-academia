package com.vitalativa.service;

import com.vitalativa.entity.AlunoAula;
import com.vitalativa.repository.AlunoAulaRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AlunoAulaService {
    
    private final AlunoAulaRepository repository;
    
    public AlunoAulaService(AlunoAulaRepository repository) {
        this.repository = repository;
    }
    
    public List<AlunoAula> findAll() {
        return repository.findAll();
    }
    
    public AlunoAula findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public AlunoAula save(AlunoAula alunoAula) {
        return repository.save(alunoAula);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}