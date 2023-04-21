package com.nocountry.backend.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.Error.Exceptions.GenericNotFoundException;
import com.nocountry.backend.dto.category.CategoryDto;
import com.nocountry.backend.mapper.ICategoryMapper;
import com.nocountry.backend.model.Category;
import com.nocountry.backend.repository.ICategoryRepository;
import com.nocountry.backend.service.ICategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements ICategoryService {

    private final ICategoryRepository categoryRepository;

    private final ICategoryMapper categoryMapper;

    @Override
    public List<CategoryDto> findAllCategories() {
        List<Category> categoryEntities = categoryRepository.findAll();
        if (categoryEntities.isEmpty()) {
            return new ArrayList<>();
        } else {
            return categoryMapper.CategoryEntityListToCategoryDTOList(categoryEntities);
        }
    }

    @Override
    public CategoryDto findCategoryById(Long categoryId) {
        Category categoryEntity = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new GenericNotFoundException(
                        String.format("The category with the provided ID (%s) was not found", categoryId)));
        return categoryMapper.CategoryToCategoryDto(categoryEntity);
    }

    @Override
    public CategoryDto saveCategory(CategoryDto categoryDto) {
        return categoryMapper
                .CategoryToCategoryDto(categoryRepository.save(categoryMapper.CategoryDtoToCategory(categoryDto)));
    }

    @Override
    public CategoryDto updateCategory(Long categoryId, CategoryDto categoryDto) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new GenericNotFoundException(
                        String.format("The category with the provided ID (%s) was not found", categoryId)));
        categoryMapper.updateCategoryFromDto(categoryDto, category);
        Category updatedCategory = categoryRepository.save(category);
        return categoryMapper.CategoryToCategoryDto(updatedCategory);

    }

    @Override
    public void deleteCategory(Long categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new GenericNotFoundException(String.format(
                        "The category with ID %s was not found. It is not possible to delete a category that does not exist. Please check if the category ID is correct and try again.",
                        categoryId)));
        categoryRepository.delete(category);
    }
}
