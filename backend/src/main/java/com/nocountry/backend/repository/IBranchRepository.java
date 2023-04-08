package com.nocountry.backend.repository;

import com.nocountry.backend.model.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBranchRepository extends JpaRepository<Branch, Long> {
}
