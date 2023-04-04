package com.nocountry.backend.controller;

import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.dto.CategoryDto;
import com.nocountry.backend.service.ICategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final ICategoryService categoryService;

    @GetMapping("/all")
    public ResponseEntity<List<CategoryDto>> getAllCategories() {
        List<CategoryDto> categories = categoryService.findAllCategories();
        if (categories.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(categories);
        }
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<CategoryDto> getCategory(@PathVariable(value = "categoryId") Long categoryId) {
        CategoryDto categoryDto = categoryService.findCategoryById(categoryId);
        return ResponseEntity.ok(categoryDto);
    }

    @PostMapping("/create")
    public ResponseEntity<CategoryDto> createCategory(@RequestBody CategoryDto categoryDto) {
        CategoryDto categorySaved = categoryService.saveCategory(categoryDto);
        return ResponseEntity.ok(categorySaved);
    }

    @PutMapping("/{categoryId}/update")
    public ResponseEntity<CategoryDto> updateCategory(@PathVariable(value = "categoryId") Long categoryId, @RequestBody CategoryDto categoryDto) {
        CategoryDto saved = categoryService.updateCategory(categoryId, categoryDto);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/{categoryId}/delete")
    public ResponseEntity<String> deleteCategory(@PathVariable(value = "categoryId") Long categoryId) {
        Optional<CategoryDto> category = Optional.ofNullable(categoryService.findCategoryById(categoryId));
        if (category.isPresent()) {
            categoryService.deleteCategory(categoryId);
            return new ResponseEntity<>("Category successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>("Category not found", HttpStatus.NOT_FOUND);
        }
    }
}
