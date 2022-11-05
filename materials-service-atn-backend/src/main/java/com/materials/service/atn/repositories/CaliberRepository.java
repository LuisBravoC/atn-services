package com.materials.service.atn.repositories;

import com.materials.service.atn.entities.Caliber;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CaliberRepository extends JpaRepository<Caliber, Long> {

    Caliber findByName(String name);

}
