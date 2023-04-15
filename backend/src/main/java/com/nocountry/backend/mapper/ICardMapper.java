package com.nocountry.backend.mapper;

import java.util.List;

import com.nocountry.backend.dto.card.CardDetailDto;
import org.mapstruct.*;

import com.nocountry.backend.dto.card.CardSaveDto;
import com.nocountry.backend.model.Card;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ICardMapper {

    CardSaveDto toCardDto(Card card);

    CardDetailDto toCardDetailDto(Card card);

    List<CardSaveDto> toCardDtos(List<Card> cards);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "customer", ignore = true)
    void updateCard(CardSaveDto cardSaveDto, @MappingTarget Card card);

    @InheritInverseConfiguration
    Card toCard(CardSaveDto cardSaveDto);
}
