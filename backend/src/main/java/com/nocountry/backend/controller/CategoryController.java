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

import com.nocountry.backend.dto.CategoryDto;
import com.nocountry.backend.service.ICategoryService;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
public class CategoryController {

    private final ICategoryService categoryService;

    @GetMapping("/all")
    public ResponseEntity<List<CategoryDto>> getAllCategories() {
        var categories = categoryService.findAllCategories();
        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(categories, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<CategoryDto> getCategory(@PathVariable Long categoryId) {
        return new ResponseEntity<>(categoryService.findCategoryById(categoryId), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<CategoryDto> createCategory(@RequestBody CategoryDto categoryDto) {
        return new ResponseEntity<>(categoryService.saveCategory(categoryDto), HttpStatus.OK);
    }

    @PutMapping("/{categoryId}/update")
    public ResponseEntity<CategoryDto> updateCategory(@PathVariable Long categoryId,
            @RequestBody CategoryDto categoryDto) {
        return new ResponseEntity<>(categoryService.updateCategory(categoryId, categoryDto), HttpStatus.OK);
    }

    @DeleteMapping("/{categoryId}/delete")
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
