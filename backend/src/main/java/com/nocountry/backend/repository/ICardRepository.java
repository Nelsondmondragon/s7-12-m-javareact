package com.nocountry.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Card;

public interface ICardRepository extends JpaRepository<Card, Long> {

    public List<Card> findAllById(Long id);

    Boolean existsByFkCustomer(Long id);

    Card findByFkCustomer(Long id);
}
