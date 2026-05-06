package com.vitalativa.repository;

import com.vitalativa.entity.PlanoModalidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanoModalidadeRepository extends JpaRepository<PlanoModalidade, Integer> {
}