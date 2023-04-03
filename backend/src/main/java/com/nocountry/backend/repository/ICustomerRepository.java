package com.nocountry.backend.repository;

import com.nocountry.backend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerRepository extends JpaRepository<Customer, Long> {

    Customer findByFkUser(Long id);


}
