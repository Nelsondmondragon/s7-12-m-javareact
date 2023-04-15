package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.card.CardDetailDto;
import com.nocountry.backend.dto.card.CardSaveDto;
import jakarta.servlet.http.HttpServletRequest;

public interface ICardService {

    List<CardSaveDto> findAllById(Long id);

    CardSaveDto save(HttpServletRequest request, CardSaveDto cardSaveDto);

    CardSaveDto findById(Long id);

    CardSaveDto update(Long id, CardSaveDto cardSaveDto);

    void deleteById(Long id);

    Boolean existsByFkCustomer(Long idCustomer);

    CardDetailDto findByIdCustomer(Long idCustomer);
}
