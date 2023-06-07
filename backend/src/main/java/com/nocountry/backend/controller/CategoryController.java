package com.nocountry.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.model.dto.category.CategoryDto;
import com.nocountry.backend.service.ICategoryService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
@Tag(name = "Categories", description = "Management of vehicle categories in MoveAr. It allows creating, modifying, and deleting categories, as well as obtaining detailed information about them.")
public class CategoryController {

    private final ICategoryService categoryService;

    @GetMapping("/all")
    @Operation(summary = "Get all categories.")
    public ResponseEntity<List<CategoryDto>> getAllCategorys() {
        var categories = categoryService.findAllCategories();
        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(categories, HttpStatus.OK);
        }
    }

    @GetMapping("/{categoryId}")
    @Operation(summary = "Get a category by Id.")
    public ResponseEntity<CategoryDto> getCategoryById(@PathVariable Long categoryId) {
        return new ResponseEntity<>(categoryService.findCategoryById(categoryId), HttpStatus.OK);
    }

    @PostMapping("/create")
    @Operation(summary = "Create a new category.")
    public ResponseEntity<CategoryDto> createCategory(@RequestBody CategoryDto category) {
        return new ResponseEntity<>(categoryService.saveCategory(category), HttpStatus.OK);
    }

    @PutMapping("/{categoryId}/update")
    @Operation(summary = "Update an existing category by Id.")
    public ResponseEntity<CategoryDto> updateCategory(@PathVariable Long categoryId,
            @RequestBody CategoryDto category) {
        return new ResponseEntity<>(categoryService.updateCategory(categoryId, category), HttpStatus.OK);
    }

    @DeleteMapping("/{categoryId}/delete")
    @Operation(summary = "Delete an existing category by Id.")
    public ResponseEntity<String> deleteCategory(@PathVariable Long categoryId) {
        Optional<CategoryDto> category = Optional.ofNullable(categoryService.findCategoryById(categoryId));
        if (category.isPresent()) {
            categoryService.deleteCategory(categoryId);
            return new ResponseEntity<>("Category successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>("Category not found", HttpStatus.NOT_FOUND);
        }
    }
}
