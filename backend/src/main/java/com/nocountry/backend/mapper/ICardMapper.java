package com.nocountry.backend.mapper;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.nocountry.backend.dto.card.CardSaveDto;
import com.nocountry.backend.model.Card;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ICardMapper {

    CardSaveDto toCardDto(Card card);

    List<CardSaveDto> toCardDtos(List<Card> cards);

    void updateCard(CardSaveDto cardSaveDto, @MappingTarget Card card);

    @InheritInverseConfiguration
    Card toCard(CardSaveDto cardSaveDto);
}
