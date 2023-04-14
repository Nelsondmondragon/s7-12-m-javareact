package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.card.CardSaveDto;
import com.nocountry.backend.service.ICardService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/cards")
@RequiredArgsConstructor
@Tag(name = "Cards", description = "Card management of a user in MoveAr. Allows you to create, read, modify and delete cards.")
// @SecurityRequirement(name = "bearerAuth")
public class CardController {

    private final ICardService cardService;

    @GetMapping(value = "/user/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CardSaveDto>> findAll(@PathVariable Long id) {
        return new ResponseEntity<>(this.cardService.findAllById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CardSaveDto> findById(@PathVariable Long id) {
        return new ResponseEntity<>(this.cardService.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CardSaveDto> save(@RequestBody CardSaveDto cardSaveDto) {
        return new ResponseEntity<>(this.cardService.save(cardSaveDto), HttpStatus.CREATED);
    }

    @PostMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CardSaveDto> update(@PathVariable Long id, @RequestBody CardSaveDto cardSaveDto) {
        return new ResponseEntity<>(this.cardService.update(id, cardSaveDto), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<CardSaveDto> deleteById(@PathVariable Long id) {
        this.cardService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
