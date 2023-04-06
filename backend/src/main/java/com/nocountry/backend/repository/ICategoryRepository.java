package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Category;

public interface ICategoryRepository extends JpaRepository<Category, Long> {

}
