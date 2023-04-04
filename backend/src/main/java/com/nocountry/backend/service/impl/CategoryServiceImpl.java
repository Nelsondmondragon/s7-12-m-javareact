package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.CategoryDto;
import com.nocountry.backend.mapper.ICategoryMapper;
import com.nocountry.backend.model.Car;
import com.nocountry.backend.model.Category;
import com.nocountry.backend.repository.ICategoryRepository;
import com.nocountry.backend.service.ICategoryService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.hibernate.ObjectDeletedException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements ICategoryService {

    private final ICategoryRepository categoryRepository;

    private final ICategoryMapper categoryMapper;

    @Override
    public List<CategoryDto> findAllCategories() {

        return categoryMapper.CategoryEntityListToCategoryDTOList(categoryRepository.findAll());
    }

    @Override
    public CategoryDto findCategoryById(Long categoryId) {
        Optional<Category> categoryEntity = categoryRepository.findById(categoryId);
        if (categoryEntity.isPresent()) {
            return categoryMapper.CategoryToCategoryDto(categoryEntity.get());
        } else {
            throw new EntityNotFoundException("Category not found with id: " + categoryId);
        }
    }

    @Override
    public CategoryDto saveCategory(CategoryDto categoryDto) {
        return categoryMapper.CategoryToCategoryDto(categoryRepository.save(categoryMapper.CategoryDtoToCategory(categoryDto)));
    }

    @Override
    public CategoryDto updateCategory(Long categoryId, CategoryDto categoryDto) {
        Optional<Category> categoryEntity = categoryRepository.findById(categoryId);
        if (categoryEntity.isPresent()) {
            Category category = categoryEntity.get();
            categoryMapper.updateCategoryFromDto(categoryDto, category);
            Category updatedCategory = categoryRepository.save(category);
            return categoryMapper.CategoryToCategoryDto(updatedCategory);
        } else {
            throw new EntityNotFoundException("Category not found with id: " + categoryId);
        }
    }

    @Override
    public void deleteCategory(Long categoryId) {
        Optional<Category> category = categoryRepository.findById(categoryId);
        if (category.isPresent()) {
            categoryRepository.delete(category.get());
        } else {
            throw new ObjectDeletedException("category with ID " + categoryId + " can't be deleted.", categoryId, "Car");
        }
    }
}
