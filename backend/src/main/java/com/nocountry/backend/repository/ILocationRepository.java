package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Location;

import java.util.List;

public interface ILocationRepository extends JpaRepository<Location, Long> {


    List<Location> findAllByBranchIsNotNull();

}
