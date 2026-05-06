package com.vitalativa.repository;

import com.vitalativa.entity.AlunoAula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoAulaRepository extends JpaRepository<AlunoAula, Integer> {
}