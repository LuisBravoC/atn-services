package com.materials.service.atn.repositories;

import com.materials.service.atn.entities.Rhomb;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RhombRepository extends JpaRepository<Rhomb, Long> {

    Rhomb findByRhomb(String rhomb);

}
