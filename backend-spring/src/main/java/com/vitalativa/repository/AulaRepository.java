package com.vitalativa.repository;

import com.vitalativa.entity.Aula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AulaRepository extends JpaRepository<Aula, Integer> {
}