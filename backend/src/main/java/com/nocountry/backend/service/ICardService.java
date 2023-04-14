package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.card.CardSaveDto;

public interface ICardService {

    public List<CardSaveDto> findAllById(Long id);

    public CardSaveDto save(CardSaveDto cardSaveDto);

    public CardSaveDto findById(Long id);

    public CardSaveDto update(Long id, CardSaveDto cardSaveDto);

    public void deleteById(Long id);
}
