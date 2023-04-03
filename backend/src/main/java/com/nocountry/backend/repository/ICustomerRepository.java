package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Customer;

public interface ICustomerRepository extends JpaRepository<Customer, Long> {

}
