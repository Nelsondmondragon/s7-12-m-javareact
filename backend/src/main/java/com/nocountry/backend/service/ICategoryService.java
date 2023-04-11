package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.CategoryDto;

public interface ICategoryService {

    public List<CategoryDto> findAllCategories();

    public CategoryDto findCategoryById(Long categoryId);

    public CategoryDto saveCategory(CategoryDto categoryDto);

    public CategoryDto updateCategory(Long categoryId, CategoryDto categoryDto);

    public void deleteCategory(Long categoryId);
}
