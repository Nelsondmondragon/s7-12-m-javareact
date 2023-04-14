package com.nocountry.backend.service;

import com.nocountry.backend.dto.card.CardSaveDto;

import java.util.List;

public interface ICardService {

    List<CardSaveDto> findAllById(Long id);

    CardSaveDto save(CardSaveDto cardSaveDto);


    CardSaveDto findById(Long id);

    CardSaveDto update(Long id, CardSaveDto cardSaveDto);

    void deleteById(Long id);

}
