package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.card.CardSaveDto;
import com.nocountry.backend.mapper.ICardMapper;
import com.nocountry.backend.model.Card;
import com.nocountry.backend.repository.ICardRepository;
import com.nocountry.backend.service.ICardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CardServiceImpl implements ICardService {

    private final ICardRepository cardRepository;

    private final ICardMapper cardMapper;


    @Override
    public List<CardSaveDto> findAllById(Long id) {
        return this.cardMapper.toCardDtos(this.cardRepository.findAllById(id));
    }

    @Override
    public CardSaveDto save(CardSaveDto cardSaveDto) {
        return this.cardMapper.toCardDto(this.cardRepository
                .save(this.cardMapper.toCard(cardSaveDto)));
    }

    @Override
    public CardSaveDto findById(Long id) {
        return this.cardRepository.findById(id).map(this.cardMapper::toCardDto)
                .orElseThrow(() -> new RuntimeException("Card not exists."));
    }

    @Override
    public CardSaveDto update(Long id, CardSaveDto cardSaveDto) {
        Card card = this.cardRepository.findById(id).get();
        this.cardMapper.updateCard(cardSaveDto, card);
        return this.cardMapper.toCardDto(this.cardRepository.save(card));
    }

    @Override
    public void deleteById(Long id) {
        this.findById(id);
        this.cardRepository.deleteById(id);
    }
}
