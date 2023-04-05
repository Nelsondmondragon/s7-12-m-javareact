package com.nocountry.backend.service;

import com.nocountry.backend.dto.CategoryDto;

import java.util.List;

public interface ICategoryService {


    CategoryDto findCategoryById(Long categoryId);

    abstract List<CategoryDto> findAllCategories();

    CategoryDto saveCategory(CategoryDto categoryDto);

    CategoryDto updateCategory(Long categoryId, CategoryDto categoryDto);

    void deleteCategory(Long categoryId);
}
