package com.nocountry.backend.service.impl;

import java.util.List;

import com.nocountry.backend.dto.card.CardDetailDto;
import com.nocountry.backend.service.IUserService;
import com.nocountry.backend.util.jwt.ExtractUsernameJwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.card.CardSaveDto;
import com.nocountry.backend.mapper.ICardMapper;
import com.nocountry.backend.model.Card;
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
    public CardSaveDto save(HttpServletRequest request, CardSaveDto cardSaveDto) {
        Long id = this.extractUsernameJwtUtil.getId(request);
        if (this.existsByFkCustomer(id)) {
            throw new RuntimeException("Exists card register.");
        }
        cardSaveDto.setFkCustomer(id);
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

    @Override
    public Boolean existsByFkCustomer(Long idCustomer) {
        return this.cardRepository.existsByFkCustomer(idCustomer);
    }

    @Override
    public CardDetailDto findByIdCustomer(Long id) {
        return this.cardMapper.toCardDetailDto(
                this.cardRepository.findByFkCustomer(id));
    }


}
