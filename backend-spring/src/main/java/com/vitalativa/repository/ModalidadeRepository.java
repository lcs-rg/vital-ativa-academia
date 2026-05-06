package com.vitalativa.repository;

import com.vitalativa.entity.Modalidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModalidadeRepository extends JpaRepository<Modalidade, Integer> {
}