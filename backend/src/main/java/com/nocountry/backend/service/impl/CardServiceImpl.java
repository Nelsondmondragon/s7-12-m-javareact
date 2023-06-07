package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.backend.config.jwt.ExtractUsernameJwtUtil;
import com.nocountry.backend.model.dto.card.CardDetailsDto;
import com.nocountry.backend.model.dto.card.CardSaveDto;
import com.nocountry.backend.model.entity.Card;
import com.nocountry.backend.model.mapper.ICardMapper;
import com.nocountry.backend.repository.ICardRepository;
import com.nocountry.backend.service.ICardService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CardServiceImpl implements ICardService {

    private final ICardRepository cardRepository;

    private final ICardMapper cardMapper;

    private final ExtractUsernameJwtUtil extractUsernameJwtUtil;

    @Override
    public List<CardSaveDto> findAllById(Long id) {
        return this.cardMapper.toCardDtos(this.cardRepository.findAllById(id));
    }

    @Override
    public CardSaveDto save(Long customerId, CardSaveDto cardSaveDto) {
        if (this.existsByFkCustomer(customerId)) {
            throw new RuntimeException("Exists card register.");
        }
        cardSaveDto.setFkCustomer(customerId);
        return this.cardMapper.toCardDto(this.cardRepository
                .save(this.cardMapper.toCard(cardSaveDto)));
    }

    @Override
    public CardSaveDto findById(Long id) {
        return this.cardRepository.findById(id).map(this.cardMapper::toCardDto)
                .orElseThrow(() -> new RuntimeException("Card not exists."));
    }

    @Override
    public CardSaveDto update(Long customerId, CardSaveDto cardSaveDto) {
        Card card = this.cardRepository.findByFkCustomer(customerId);
        if (card == null) {
            throw new RuntimeException("Customer not exists.");
        }
        cardSaveDto.setFkCustomer(customerId);
        this.cardMapper.updateCard(cardSaveDto, card);
        return this.cardMapper.toCardDto(this.cardRepository.save(card));
    }

    @Override
    public void deleteById(Long id) {
        this.findById(id);
        this.cardRepository.deleteById(id);
    }

    @Override
    public Boolean existsByFkCustomer(Long idCustomer) {
        return this.cardRepository.existsByFkCustomer(idCustomer);
    }

    @Override
    public CardDetailsDto findByIdCustomer(Long id) {
        return this.cardMapper.toCardDetailDto(
                this.cardRepository.findByFkCustomer(id));
    }

}
