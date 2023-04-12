package com.nocountry.backend.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.nocountry.backend.Error.Exceptions.GenericNotFoundException;
import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.CategoryDto;
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
                .orElseThrow(() -> new GenericNotFoundException(String.format("The category with the provided ID (%s) was not found", categoryId)));
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
            .orElseThrow(() -> new GenericNotFoundException(String.format("The category with the provided ID (%s) was not found", categoryId)));
        categoryMapper.updateCategoryFromDto(categoryDto,category);
        Category updatedCategory= categoryRepository.save(category);
        return categoryMapper.CategoryToCategoryDto(updatedCategory);


    }

    @Override
    public void deleteCategory(Long categoryId) {
        Category category = categoryRepository.findById(categoryId).orElseThrow(() ->
                new GenericNotFoundException(String.format("La categoría con ID %s no se ha encontrado. No se puede eliminar una categoría que no existe. Por favor, compruebe si el ID de la categoría es correcto e intente de nuevo."
                        , categoryId)));
        categoryRepository.delete(category);
    }
}
