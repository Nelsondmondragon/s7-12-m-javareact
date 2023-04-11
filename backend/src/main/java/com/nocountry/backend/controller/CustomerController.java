package com.nocountry.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.service.ICustomerService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/customers")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Clientes", description = "Clientes de MoveAr.")
public class CustomerController {

    private final ICustomerService customerService;

    @GetMapping("/profile")
    @Operation(summary = "Detalles de un cliente, enviando en la cabecera de la peticion el JWT.")
    private ResponseEntity<CustomerDetailsDto> getCustomerByEmail(HttpServletRequest request) {
        return new ResponseEntity<>(customerService.findCustomerByEmail(request), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener la informacion de un cliente por id.")
    public ResponseEntity<CustomerDetailsDto> getCustomerById(
            @Parameter(description = "Identificador unico del cliente.") @PathVariable Long id) {
        return new ResponseEntity<>(customerService.findCustomerById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar la informacion de un cliente por id.")

    public ResponseEntity<CustomerDetailsDto> updateCustomer(@PathVariable Long id,
            @RequestBody CustomerDetailsDto customerDetailsDto) {
        return new ResponseEntity<>(customerService.updateCustomer(id, customerDetailsDto),
                HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar un cliente por id.")
    public ResponseEntity<CustomerDetailsDto> deleteCustomer(
            @Parameter(description = "Identificador unico del cliente.") @PathVariable Long id) {
        customerService.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }
}