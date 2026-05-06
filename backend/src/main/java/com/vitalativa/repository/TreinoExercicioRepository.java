package com.vitalativa.repository;

import com.vitalativa.entity.TreinoExercicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreinoExercicioRepository extends JpaRepository<TreinoExercicio, Integer> {
}