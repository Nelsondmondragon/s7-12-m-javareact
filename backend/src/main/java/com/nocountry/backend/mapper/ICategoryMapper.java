package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.dto.CategoryDto;
import com.nocountry.backend.model.Car;
import com.nocountry.backend.model.Category;
import org.mapstruct.Condition;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ICategoryMapper {

    CategoryDto CategoryToCategoryDto(Category category);

    Category CategoryDtoToCategory(CategoryDto categoryDto);

    List<CategoryDto> CategoryEntityListToCategoryDTOList(List<Category> allCategories);

    @Mapping(target = "id", ignore = true)
    void updateCategoryFromDto(CategoryDto categoryDto, @MappingTarget Category category);

    @Condition
    default boolean isNotEmpty(String value) {
        return value != null && !value.isEmpty();
    }
}