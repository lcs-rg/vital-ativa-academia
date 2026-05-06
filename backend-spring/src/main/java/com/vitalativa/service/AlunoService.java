package com.vitalativa.service;

import com.vitalativa.entity.Aluno;
import com.vitalativa.repository.AlunoRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {
    
    private final AlunoRepository repository;
    
    public AlunoService(AlunoRepository repository) {
        this.repository = repository;
    }
    
    public List<Aluno> findAll() {
        return repository.findAllByOrderByNomeAsc();
    }
    
    public Optional<Aluno> findById(Integer id) {
        return repository.findById(id);
    }
    
    public Aluno save(Aluno aluno) {
        return repository.save(aluno);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}