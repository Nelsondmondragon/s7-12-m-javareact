package com.nocountry.backend.controller;

import com.nocountry.backend.dto.card.CardDetailDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nocountry.backend.dto.card.CardSaveDto;
import com.nocountry.backend.service.ICardService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/cards")
@RequiredArgsConstructor
@Tag(name = "Cards", description = "Card management of a user in MoveAr. Allows you to create, read, modify and delete cards.")
@SecurityRequirement(name = "bearerAuth")
public class CardController {

    private final ICardService cardService;

    @GetMapping(value = "/detail/{customerId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Get all the details of a card by customer id.")
    public ResponseEntity<CardDetailDto> findByIdCustomer(@PathVariable("customerId") Long idCustomer) {
        return new ResponseEntity<>(this.cardService.findByIdCustomer(idCustomer), HttpStatus.OK);
    }


    @GetMapping(value = "/exist/{customerId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Checks if the customer has a registered card, the customer id is specified.")
    public ResponseEntity<Boolean> findCardExist(@PathVariable("customerId") Long idCustomer) {
        return new ResponseEntity<>(this.cardService.existsByFkCustomer(idCustomer), HttpStatus.OK);
    }

    @PostMapping(value = "/{customerId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Create a card for the customer.")
    public ResponseEntity<CardSaveDto> save(@PathVariable Long customerId, @RequestBody CardSaveDto cardSaveDto) {
        return new ResponseEntity<>(this.cardService.save(customerId, cardSaveDto), HttpStatus.CREATED);
    }

    @PutMapping(value = "/{customerId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Update the information of a card by id.")
    public ResponseEntity<CardSaveDto> update(@PathVariable Long customerId, @RequestBody CardSaveDto cardSaveDto) {
        return new ResponseEntity<>(this.cardService.update(customerId, cardSaveDto), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    @Operation(summary = "Delete card by id.")
    public ResponseEntity<CardSaveDto> deleteById(@PathVariable Long id) {
        this.cardService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
