package com.nocountry.backend.repository;

import com.nocountry.backend.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICardRepository extends JpaRepository<Card, Long> {


    List<Card> findAllById(Long id);

}
