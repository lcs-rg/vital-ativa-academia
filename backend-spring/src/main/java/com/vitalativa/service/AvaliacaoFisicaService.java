package com.vitalativa.service;

import com.vitalativa.entity.AvaliacaoFisica;
import com.vitalativa.repository.AvaliacaoFisicaRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AvaliacaoFisicaService {
    
    private final AvaliacaoFisicaRepository repository;
    
    public AvaliacaoFisicaService(AvaliacaoFisicaRepository repository) {
        this.repository = repository;
    }
    
    public List<AvaliacaoFisica> findAll() {
        return repository.findAll();
    }
    
    public AvaliacaoFisica findById(Integer id) {
        return repository.findById(id).orElse(null);
    }
    
    public AvaliacaoFisica save(AvaliacaoFisica avaliacao) {
        return repository.save(avaliacao);
    }
    
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}