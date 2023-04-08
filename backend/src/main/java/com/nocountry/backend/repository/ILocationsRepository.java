package com.nocountry.backend.repository;


import com.nocountry.backend.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ILocationsRepository extends JpaRepository<Location, Long> {
    List<Location> findAllByBranchesIsNotNull();
}
