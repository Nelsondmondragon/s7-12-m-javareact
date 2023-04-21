package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.card.CardDetailsDto;
import com.nocountry.backend.dto.card.CardSaveDto;
import jakarta.servlet.http.HttpServletRequest;

public interface ICardService {

    List<CardSaveDto> findAllById(Long id);

    CardSaveDto save(Long customerId, CardSaveDto cardSaveDto);

    CardSaveDto findById(Long id);

    CardSaveDto update(Long id, CardSaveDto cardSaveDto);

    void deleteById(Long id);

    Boolean existsByFkCustomer(Long idCustomer);

    CardDetailsDto findByIdCustomer(Long idCustomer);
}
